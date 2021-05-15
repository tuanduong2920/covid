import React, { memo, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

const Chart = ({dataSet, options, height}) => {

  return (
    <div className="chart">
      <Line
        data={dataSet}
        options={options}
        height={height}
      />
    </div>
  );
};

export default memo(Chart);
