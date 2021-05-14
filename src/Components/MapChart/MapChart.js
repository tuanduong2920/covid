import React, { memo, useEffect, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const rounded = (num) => {
//   if (num > 1000000000) {
//     return Math.round(num / 100000000) / 10 + "Bn";
//   } else if (num > 1000000) {
//     return Math.round(num / 100000) / 10 + "M";
//   } else {
//     return Math.round(num / 100) / 10 + "K";
//   }
// };

const MapChart = ({ setTooltipContent, countries }) => {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const countiesData = [...countries];
    const countriesMapData = countiesData.map((i) => {
      return { iso: i.countryInfo.iso2, cases: i.cases };
    });
    setMapData(countriesMapData);
    
  }, [countries]);

  const getCaseByISO2 = (iso) => {
    if (mapData.length === 0) return;
    const cases = mapData.filter((e) => {
      return e.iso === iso;
    });
    if (cases.length === 0) return "update";
    const [obj] = cases;
    return obj.cases;
  };

  const drawColor = (cases) => {
    if (cases < 50000) {
      return {
        default: {
          fill: "#ACCDDC",
          outline: "none",
        },
        hover: {
          fill: "#F53",
          outline: "none",
        },
        pressed: {
          fill: "#E42",
          outline: "none",
        },
      };
    } else if (cases >= 50000 && cases < 100000) {
      return {
        default: {
          fill: "#4A97B9",
          outline: "none",
        },
        hover: {
          fill: "#F53",
          outline: "none",
        },
        pressed: {
          fill: "#E42",
          outline: "none",
        },
      };
    } else {
      return {
        default: {
          fill: "#006491",
          outline: "none",
        },
        hover: {
          fill: "#F53",
          outline: "none",
        },
        pressed: {
          fill: "#E42",
          outline: "none",
        },
      };
    }
  };

  return (
    <>
      <ComposableMap
        height={550}
        data-tip=""
        projectionConfig={{ scale: 140 }}
        projection="geoEquirectangular"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { ISO_A2, NAME } = geo.properties;
                const cases = getCaseByISO2(ISO_A2);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(`${NAME} — ${cases}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={drawColor(cases)}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
