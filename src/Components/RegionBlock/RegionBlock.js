import React from "react";
import ContentBlock from "./ContentBlock/ContentBlock";
import "./RegionBlock.css";
const RegionBlock = ({
  imgSrc,
  countyName,
  totalCase,
  newCase,
  totalRecovered,
  totalDeath,
  newDeath,
  deathPercent,
  activeCase,
}) => {
  return (
    <div className="worldwide-stats">
      <div className="tracker-block country-block">
        <div className="country-block-header">
          <div className="tracker-block__icon">
            <img src={imgSrc} alt="corona-icon" />
          </div>
          <h2>{countyName}</h2>
        </div>
        <div className="tracker-block__content country-block-content">
            {/* mapListContentBlock */}

            <ContentBlock caption="Tổng số ca nhiễm" value="9999"/>
            <ContentBlock caption="Tổng số ca nhiễm" value="9999"/>
            <ContentBlock caption="Tổng số ca nhiễm" value="9999"/>
            <ContentBlock caption="Tổng số ca nhiễm" value="9999"/>
            <ContentBlock caption="Tổng số ca nhiễm" value="9999"/>
            <ContentBlock caption="Tổng số ca nhiễm" value="9999"/> 
        </div>
      </div>
    </div>
  );
};

export default RegionBlock;
