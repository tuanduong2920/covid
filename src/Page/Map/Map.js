import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import Select from "react-select";
import VnMap from "../../Components/MapChart/VnMap";
import Province from "../../GeoData/province.json";
import "./Map.css";
import PatientsList from "../../Components/PatientsList/PatientsList";
const Map = () => {
  const [toolTip, setToolTip] = useState("");
  const [selectArr, setSelectArr] = useState([]);
  const [selectValue, setSelectValue] = useState();

  useEffect(() => {
    const selectArr = Province.map((i) => {
      return { value: i.province, label: i.province };
    });
    setSelectValue(Province[1]);
    setSelectArr(selectArr);
  }, []);

  const handleChangeSelect = (selectOption) => {
   
    try {
      const [selectValue] = Province.filter(
        (i) => i.province === selectOption.value
      );

      if (selectValue === undefined) {
        setSelectValue({
          province: `${selectOption.value}`,
          confirmed: 0,
          recovered: 0,
          deaths: 0,
        });
        return;
      }
      setSelectValue(selectValue);
      return;
    } catch (error) {
      setSelectValue({
        province: `${selectOption.value}`,
        confirmed: 0,
        recovered: 0,
        deaths: 0,
      });
      return;
    }
  };

  return (
    selectArr.length !== 0 && (
      <>
        <main class="main-content-wrapper p-0 " style={{ color: "black" }}>
          <div className="d-flex flex-wrap p-0 flex-row-reverse">
            <div className="col-md-9 map">
              <div className="map-status-colors my-0 py-1">
                <ul className="colors d-flex">
                  <li>
                    <span className="min"></span>&lt;10
                  </li>
                  <li>
                    <span className="mid"></span>&lt;50
                  </li>
                  <li>
                    <span className="max"></span>&gt;50
                  </li>
                </ul>
              </div>
              <VnMap
                setTooltipContent={setToolTip}
                onClickProvince={handleChangeSelect}
                province={Province}
              ></VnMap>
              <ReactTooltip>{toolTip}</ReactTooltip>
            </div>
            <div class="col-md-3 tracker-block tracker-block--4 align-items-start">
              <div class="tracker-block__body list-prop">
                <div class="track-item">
                  <Select
                    onChange={handleChangeSelect}
                    value={{
                      value: selectValue.province,
                      label: selectValue.province,
                    }}
                    options={selectArr}
                  />
                </div>
                <div class="track-item">
                  <p class="track-item__title">Tổng số ca</p>
                  <h4 class="track-item__no infected">
                    {selectValue.confirmed}
                  </h4>
                </div>
                <div class="track-item">
                  <p class="track-item__title">Hồi phục</p>
                  <h4 class="track-item__no today_infected">
                    {selectValue.recovered}
                  </h4>
                </div>
                <div class="track-item">
                  <p class="track-item__title">Tử vong</p>
                  <h4 class="track-item__no deaths">{selectValue.deaths}</h4>
                </div>
                <div class="track-item">
                <p class="track-item__title">Danh sách bệnh nhân</p>
                  <PatientsList address={selectValue.province} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  );
};

export default Map;
