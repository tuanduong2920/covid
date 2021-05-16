import React, { useEffect, useState } from "react";
import "./Header.css";
import CoronaRed from "../../assets/icon/corona-icon-red.png";
import Covid19Api from "../../Api/Covid19/Covid19Api";

const Header = () => {
  const [updateTime, setUpdateTime] = useState();
  useEffect(() => {
    const fetchDataGlobal = async () => {
      try {
        const res = await Covid19Api.getGlobal();
        const updated = new Date(res.updated);
        const dateTime = `${updated.toLocaleDateString()} (${updated.toLocaleTimeString()})`;
        setUpdateTime(dateTime);
      } catch (error) {
        throw error;
      }
    };
    fetchDataGlobal();
  }, []);
  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4">
            <div className="logo-wrap">
              <a className="logo-link" href="#">
                <img src={CoronaRed} className="logo" alt="logo" />
                <span className="logo-caption">Covid19</span>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="last-update-wrap">
              <p className="mb-0">
                Cập nhật: <span className="last-update">{updateTime}</span>
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="navbar-wrap">
              <nav className="menubar">
                <ul className="nav">
                  <li>
                    <a href="index-dark.html">Thống kê</a>
                  </li>
                  <li>
                    <a href="map-dark.html">Bản đồ</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
