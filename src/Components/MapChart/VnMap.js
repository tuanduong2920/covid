import React, { memo, useEffect, useState } from "react";
import vnTopo from "../../GeoData/vn.json";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const VnMap = ({ setTooltipContent, onClickProvince, province }) => {
  // const [mapData, setMapData] = useState([]);

  // useEffect(() => {
  //   setMapData(Province);
  // }, []);

  const drawColor = (cases) => {
    if (cases < 10) {
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
    } else if (cases >= 10 && cases < 50) {
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

  const getProvinceByName = (name) => {
    try {
      const p = province.filter((e) => {
        return e.province === name;
      });
      const [obj] = p;
      return obj;
    } catch (error) {
      return {};
    }
  };

  // getProvinceByName("Hà Tĩnh")

  return (
    province !== undefined && (
      <>
        <ComposableMap
          projectionConfig={{ scale: 1700 }}
          data-tip=""
          projection="geoEquirectangular"
        >
          <ZoomableGroup zoom={1} maxZoom={1} minZoom={1} center={[106, 16]}>
            <Geographies geography={vnTopo}>
              {({ geographies }) => {
                return geographies.map((geography, i) => {
                  const { NAME_1 } = geography.properties;

                  const { province, confirmed, recovered, deaths } =
                    getProvinceByName(NAME_1)
                      ? getProvinceByName(NAME_1)
                      : {
                          province: `${NAME_1}`,
                          confirmed: 0,
                          recovered: 0,
                          deaths: 0,
                        };

                  return (
                    <Geography
                      key={i}
                      geography={geography}
                      onMouseEnter={() =>
                        setTooltipContent(`${NAME_1} — ${confirmed}`)
                      }
                      onClick={() => onClickProvince({ value: `${NAME_1}` })}
                      onMouseLeave={() => setTooltipContent("")}
                      style={drawColor(confirmed)}
                    />
                  );
                });
              }}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </>
    )
  );
};

export default memo(VnMap);
