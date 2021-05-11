import React from "react";

const Tracker = ({title, imgSrc, totalCase ,todayCase }) => {
  return (
    <div className="col-md-6">
      <div className="tracker-block-style-1">
        <div className="tracker-block">
          <div className="tracker-block__icon">
            <img src={imgSrc} alt="corona-icon" />
          </div>
          <div className="tracker-block__content">
            <h4>{title}</h4>
            <h2>
              <span className="cases-no infected">{totalCase}</span>{" "}
              <span className="new-no">
                (+<span className="today_infected">{todayCase}</span>)
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
