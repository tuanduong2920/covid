import React, { useEffect, useState } from "react";
import TrackerList from "../../Components/TrackerBlock/TrackerList";
import RegionBlock from "../../Components/RegionBlock/RegionBlock";
import MapChart from "../../Components/MapChart/MapChart";
import PageHOC from "../PageHOC";
import ReactTooltip from "react-tooltip";

import "./Dashboard.css";
import Covid19Api from "../../Api/Covid19/Covid19Api";
import CountriesTable from "../../Components/CountriesTable/CountriesTable";

const Dashboard = () => {
  const [toolTipContent, setToolTipContent] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const res = await Covid19Api.getALLCountries();

        setCountries(res);
      } catch (error) {
        throw error;
      }
    };
    fetchCountriesData();
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
            </div>
            <div className="row ">
              <div className="col-xl-12 mt-3">
                <RegionBlock countries={countries} />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 mt-3 ">
                <CountriesTable countries={countries} itemDisplay={8}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageHOC>
  );
};

export default Dashboard;
