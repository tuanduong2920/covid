import React from "react";
import './Tracker.css'

const Tracker = ({title, imgSrc, totalCase ,todayCase }) => {
  return (
    <div className="col-md-6">
      <div className="tracker-block-style-1">
        <div className="tracker-block">
          <div className="tracker-block__icon tracker-img">
            <img src={imgSrc} alt="corona-icon" />
          </div>
          <div className="tracker-block__content">
            <h4>{title}</h4>
            
              <span className="cases-no infected">{totalCase}</span>{" "}
              {todayCase && <span className="new-no">
                (+<span className="today_infected">{todayCase}</span>)
              </span>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
