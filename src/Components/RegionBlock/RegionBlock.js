import React from "react";
import ContentBlock from "./ContentBlock/ContentBlock";
import "./RegionBlock.css";
const RegionBlock = ({ countries }) => {
  // console.log(countries);
  return (
    (countries.length > 0) && (
      <div className="worldwide-stats">
        <div className="tracker-block country-block">
          <div className="country-block-header">
            <div className="country-info">
              <div className="tracker-block__icon">
                <img src="#" alt="corona-icon" />
              </div>
              <h2>countyName</h2>
            </div>
            <div className="country-select">
              <select
                className="form-control"
                onChange={(e) => console.log(e.target.value)}
              >
                {countries.map((i) => {
                  // console.log(i);
                  return <option value={i.country}>{i.country}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="tracker-block__content country-block-content">
            {/* mapListContentBlock */}

            <ContentBlock caption="Tổng số ca nhiễm" value="9999" />
            <ContentBlock caption="Tổng số ca nhiễm" value="9999" />
            <ContentBlock caption="Tổng số ca nhiễm" value="9999" />
            <ContentBlock caption="Tổng số ca nhiễm" value="9999" />
            <ContentBlock caption="Tổng số ca nhiễm" value="9999" />
            <ContentBlock caption="Tổng số ca nhiễm" value="9999" />
          </div>
        </div>
      </div>
    )
  );
};

export default RegionBlock;
