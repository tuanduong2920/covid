import React, { useEffect, useState } from "react";
import TrackerList from "../../Components/TrackerBlock/TrackerList";
import RegionBlock from "../../Components/RegionBlock/RegionBlock";
import MapChart from "../../Components/MapChart/MapChart";
import PageHOC from "../PageHOC";
import ReactTooltip from "react-tooltip";

import "./Dashboard.css";
import Covid19Api from "../../Api/Covid19/Covid19Api";

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
  const [toolTipContent, setToolTipContent] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    try {
      const res = await Covid19Api.getALLCountries();

      setCountries(res);
    } catch (error) {
      throw error;
    }
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
              <div className="col-xl-6 mt-3-onResponsive">
                <div className="dashboard-map">
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
                    setTooltipContent={setToolTipContent}
                    countries={countries}
                  />
                  <ReactTooltip>{toolTipContent}</ReactTooltip>
                </div>
              </div>

              <div className="col-xl-12 mt-3">
                <RegionBlock countries={countries} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageHOC>
  );
};

export default Dashboard;
