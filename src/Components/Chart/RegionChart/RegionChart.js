import React, { useState, useEffect } from "react";
import Chart from "../Chart";

const convertCasesByDay = (arr, key) => {
  return arr.map((item, index) => {
    if (arr[index + 1] === undefined) return 0;
    const sub = Math.abs(item[key] - arr[index + 1][key]);
    return sub;
  });
};

const RegionChart = ({ regionChartData, country }) => {
  const [dataSet, setDataSet] = useState({});

  const options = {
    plugins: {
      responsive: true,
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Biểu đồ covid trong 30 ngày của ${country && country.country}`,
        position: "bottom",
        color: "#555555",
      },
    },
  };

  useEffect(() => {
    const label = regionChartData.map((i) => {
      const date = new Date(i.Date).toLocaleDateString();
      return date;
    });
    label.shift();

    const TotalCases = convertCasesByDay(regionChartData, "Confirmed");
    TotalCases.pop();
  
    const TotalDeaths = convertCasesByDay(regionChartData, "Deaths");
    TotalDeaths.pop();
  
    const TotalRecovereds = convertCasesByDay(regionChartData, "Recovered");
    TotalRecovereds.pop();
   

    setDataSet({
      labels: label,
      datasets: [
        {
          label: "Dương tính",
          data: TotalCases,
          borderColor: "#007bff",
          backgroundColor: "#007bff",
        },
        {
          label: "Tử vong",
          data: TotalDeaths,
          borderColor: "#DC143C",
          backgroundColor: "#DC143C",
        },
        {
          label: "Hồi phục",
          data: TotalRecovereds,
          borderColor: "#7CFC00",
          backgroundColor: "#7CFC00",
        },
      ],
    });
  }, [regionChartData]);

  return <Chart dataSet={dataSet} options={options} />;
};

export default RegionChart;
