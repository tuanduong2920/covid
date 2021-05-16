import React from "react";
import Tracker from "./Tracker/Tracker";
import img from "../../assets/icon/corona-icon-green.png";


const TrackerList = ({ globalData }) => {
  return (
    <>
      <Tracker
        title="Số ca ghi nhận"
        imgSrc={img}
        totalCase={globalData.cases}
        todayCase={globalData.todayCases}
      />
      <Tracker
        title="Số ca tử vong"
        imgSrc={img}
        totalCase={globalData.deaths}
        todayCase={globalData.todayDeaths}
      />
      <Tracker
        title="Số ca phục hồi"
        imgSrc={img}
        totalCase={globalData.recovered}
        todayCase={globalData.todayRecovered}
      />
     
    </>
  );
};

export default TrackerList;
