import React, { memo, useEffect, useState } from "react";
import Select from "react-select";
import Covid19Api from "../../Api/Covid19/Covid19Api";

import RegionChart from "../Chart/RegionChart/RegionChart";
import ContentBlock from "./ContentBlock/ContentBlock";
import "./RegionBlock.css";

const RegionBlock = ({ countries }) => {
  const [selectValue, setSelectvalue] = useState();
  const [selectArr, setSelectArr] = useState([]);
  const [regionChartData, setRegionChartData] = useState([]);

  useEffect(() => {
    const contriesValue = countries.map((i) => {
      return { value: i.country, label: i.country };
    });

    setSelectArr(contriesValue);
    setSelectvalue(countries[0]);
  }, [countries]);

  useEffect(() => {
    const fetchRegionChartData = async () => {
      try {
        if (selectValue === undefined) return;
        const res = await Covid19Api.getCountryFromTo(
          selectValue.countryInfo.iso2
        );

        setRegionChartData(res);
      } catch (error) {
        setRegionChartData([]);
        throw error;
      }
    };
    fetchRegionChartData();
  }, [selectValue]);

  const handleChangeSelect = (selectOption) => {
    const [selectValue] = countries.filter(
      (i) => i.country === selectOption.value
    );
    setSelectvalue(selectValue);
  };

  return (
    <div className="worldwide-stats">
      <div className="tracker-block country-block">
        <div className="country-block-header">
          <div className="country-info">
            <div className="tracker-block__icon region-flag">
              <img
                src={selectValue && selectValue.countryInfo.flag}
                alt="corona-icon"
              />
            </div>
            <h3>{selectValue && selectValue.country}</h3>
          </div>
          <div className="country-select">
            {selectValue && (
              <Select
                onChange={handleChangeSelect}
                defaultValue={selectArr[0]}
                options={selectArr}
              />
            )}
          </div>
        </div>

        <div className="tracker-block__content country-block-content">
          <ContentBlock
            caption="Tổng số ca nhiễm"
            value={selectValue && selectValue.cases}
          />
          <ContentBlock
            caption="Số ca mới"
            value={selectValue && selectValue.todayCases}
          />
          <ContentBlock
            caption="Tử vong"
            value={selectValue && selectValue.deaths}
          />
          <ContentBlock
            caption="Phục hồi"
            value={selectValue && selectValue.recovered}
          />
          <ContentBlock
            caption="Ca nhiễm hiện tại"
            value={selectValue && selectValue.active}
          />
          <ContentBlock
            caption="Ca tử vong hôm nay"
            value={selectValue && selectValue.todayDeaths}
          />
        </div>
        <div className="row">
          <div className="col-lg-12 mt-2">
            <RegionChart
              regionChartData={regionChartData}
              country={selectValue && selectValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RegionBlock);
