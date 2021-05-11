import React, { useEffect, useState } from "react";
import TrackerList from "../../Components/TrackerBlock/TrackerList";
import RegionBlock from "../../Components/RegionBlock/RegionBlock";
import MapChart from "../../Components/MapChart/MapChart";
import PageHOC from "../PageHOC";
import ReactTooltip from "react-tooltip";

import "./Dashboard.css"

const objTest = {
  imgSrc: "https://disease.sh/assets/img/flags/vn.png",
  countyName: "Việt Nam",
  totalCase: "20000",
  newCase: "20",
  totalRecovered: "19999",
  totalDeath: "20",
  newDeath: "1",
  deathPercent: "10",
  activeCase: "10",
};

const Dashboard = () => {
  const [content, setContent] = useState("");
  const [covidCount, setCovidCount] = useState([]);

  useEffect(async () => {
    const res = await (
      await fetch("https://disease.sh/v3/covid-19/countries")
    ).json();
    const counter = res.map((i) => {
      return { iso: i.countryInfo.iso2, cases: i.cases };
    });
    setCovidCount(counter);
  }, []);

  return (
    <PageHOC>
      <main className="main-content-wrapper">
        <div className="content-section-1">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="row mtn-25 worldwide-stats">
                  <TrackerList />
                </div>
              </div>
              <div className="col-xl-6 dashboard-map">
                <div className="map-status-colors my-0 py-1">
                  <ul className="colors d-flex">
                    <li>
                      <span className="min"></span>&lt;50k
                    </li>
                    <li>
                      <span className="mid"></span>&lt;100k
                    </li>
                    <li>
                      <span className="max"></span>&gt;100k
                    </li>
                  </ul>
                </div>
                <MapChart
                  setTooltipContent={setContent}
                  covidCount={covidCount}
                />
                <ReactTooltip>{content}</ReactTooltip>
              </div>

              {/* <div className="col-xl-6">
                <RegionBlock {...objTest} />
                
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </PageHOC>
  );
};

export default Dashboard;
