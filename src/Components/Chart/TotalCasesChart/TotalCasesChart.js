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
      text: "Biểu đồ ca dương tính trong 30 ngày trên thế giới",
      position: "top",
      color: "#007bff",
    },
  },
};

const TotalCasesChart = ({ globalChartData }) => {
  const [dataSet, setDataSet] = useState({});
  useEffect(() => {
    const label = globalChartData.map((i) => {
      const date = new Date(i.Date).toLocaleDateString();
      return date;
    });
    const dataCases = globalChartData.map((i) => i.NewConfirmed);
  
    setDataSet({
      labels: label,
      datasets: [
        {
          label: "Dương tính",
          data: dataCases,
          borderColor: "#007bff",
          backgroundColor: "#007bff",
        }
      ],
    });

    
  }, [globalChartData]);

  return <Chart dataSet={dataSet} options={options} />;
};

export default TotalCasesChart;
