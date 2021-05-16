import React, { useEffect, useState } from "react";
import Chart from "../Chart";

const options = {
  plugins: {
    responsive: true,
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Biểu đồ ca tử vong trong 30 ngày trên thế giới",
      position: "top",
      color: "#DC143C",
    },
  },
};

const TotalDeathsChart = ({ globalChartData }) => {
  const [dataSet, setDataSet] = useState({});
  useEffect(() => {
    
    const label = globalChartData.map((i) => {
      const date = new Date(i.Date).toLocaleDateString();
      return date;
    });
    const data = globalChartData.map((i) => i.NewDeaths );
    setDataSet({
      labels: label,
      datasets: [
        {
          label: "Tử vong",
          data: data,
          borderColor: "#DC143C",
          backgroundColor: "#DC143C",
        },
      ],
    });

 
  }, [globalChartData]);

  return <Chart dataSet={dataSet} options={options} />;
};

export default TotalDeathsChart;
