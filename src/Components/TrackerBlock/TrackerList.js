import React from "react";
import Tracker from "./Tracker/Tracker";
import img from "../../assets/icon/corona-icon-green.png";
const List = [
  {
    title: "Số ca nhiễm covid19 trên thế giới",
    imgSrc: img,
    totalCase: "9999999",
    todayCase: "9999",
  },
  {
    title: "Số ca nhiễm covid19 trên thế giới",
    imgSrc: img,
    totalCase: "9999999",
    todayCase: "9999",
  },
  {
    title: "Số ca nhiễm covid19 trên thế giới",
    imgSrc: img,
    totalCase: "9999999",
    todayCase: "9999",
  },
  {
    title: "Số ca nhiễm covid19 trên thế giới",
    imgSrc: img,
    totalCase: "9999999",
    todayCase: "9999",
  },
  
];

const TrackerList = () => {
  return <>{List.map(i => <Tracker {...i} />)}</>
};

export default TrackerList;
