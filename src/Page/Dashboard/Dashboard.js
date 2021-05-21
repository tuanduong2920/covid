import React, { useEffect, useState } from "react";
import TrackerList from "../../Components/TrackerBlock/TrackerList";
import RegionBlock from "../../Components/RegionBlock/RegionBlock";
import MapChart from "../../Components/MapChart/MapChart";
import ReactTooltip from "react-tooltip";
import "./Dashboard.css";
import Covid19Api from "../../Api/Covid19/Covid19Api";
import CountriesTable from "../../Components/CountriesTable/CountriesTable";

import TotalCasesChart from "../../Components/Chart/TotalCasesChart/TotalCasesChart";
import TotalDeathsChart from "../../Components/Chart/TotalDeathsChart/TotalDeathsChart";

const Dashboard = () => {
  const [toolTipContent, setToolTipContent] = useState("");
  const [countries, setCountries] = useState([]);
  const [globalData, setGlobalData] = useState({});
  const [globalChartData, setGlobalChartData] = useState([]);

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

  useEffect(() => {
    const fetchGlobalChartData = async () => {
      try {
        const res = await Covid19Api.getGlobalFromTo();
        const globalChartAscending = res.sort((i1, i2) => {
          const d1 = new Date(i1.Date);
          const d2 = new Date(i2.Date);
          return d1 - d2;
        });

        setGlobalChartData(globalChartAscending);
      } catch (error) {
        throw error;
      }
    };

    fetchGlobalChartData();
  }, []);

  useEffect(() => {
    const fetchDataGlobal = async () => {
      try {
        const res = await Covid19Api.getGlobal();
        setGlobalData(res);
      } catch (error) {
        throw error;
      }
    };
    fetchDataGlobal();
  }, []);

  return (
    <>
      <main className="main-content-wrapper">
        <div className="content-section-1">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="row mtn-25 worldwide-stats">
                  <TrackerList globalData={globalData} />
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
            <div className="row">
              <div className="col-lg-6 mt-3">
                <TotalCasesChart globalChartData={globalChartData} />
              </div>
              <div className="col-lg-6 mt-3">
                <TotalDeathsChart globalChartData={globalChartData} />
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12 mt-3">
                <RegionBlock countries={countries} />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 mt-3 ">
                <CountriesTable countries={countries} itemDisplay={8} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
