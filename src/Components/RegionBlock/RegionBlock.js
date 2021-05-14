import React, { useEffect, useState } from "react";
import Select from "react-select";
import ContentBlock from "./ContentBlock/ContentBlock";
import "./RegionBlock.css";
const RegionBlock = ({ countries }) => {
  const [selectValue, setSelectvalue] = useState();
  const [selectArr, setSelectArr] = useState([]);

  useEffect(() => {
    const contriesValue = countries.map((i) => {
      return { value: i.country, label: i.country };
    });

    setSelectArr(contriesValue);
    setSelectvalue(countries[0]);
  }, [countries]);

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
            <div className="tracker-block__icon">
              <img
                src={selectValue  && selectValue.countryInfo.flag}
                alt="corona-icon"
              />
            </div>
            <h2>{selectValue  && selectValue.country}</h2>
          </div>
          <div className="country-select">
            {selectValue  && (
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
            caption="Tổng ca trong ngày"
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
      </div>
    </div>
  );
};

export default RegionBlock;
