import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./CountriesTable.css";

const CountriesTable = ({ countries, itemDisplay }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [initCountriesData, setInitCountriesData] = useState([]);
  const [tableValue, setTableValue] = useState([]);

  useEffect(() => {
    setInitCountriesData(countries);
    setTableValue(countries);
  }, [countries]);

  useEffect(() => {
    setCurrentPage(1);
  }, [initCountriesData]);

  const onChangeFilter = (value) => {
    const filter = initCountriesData.filter((e) => {
      return e.country.toLowerCase().includes(value.toLowerCase());
    });
    setTableValue(filter);
  };

  const start = (currentPage - 1) * itemDisplay;
  const end = start + itemDisplay;
  const pageList = tableValue.slice(start, end);

  return (
    <>
      <div className="px-4 py-3 countries-table">
        <div className="table-header py-1">
          <h2 className="table-title">Thống kê theo quốc gia</h2>
          <div className="table-filter">
            <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                className="filter-input form-control"
                type="text"
                name="filterText"
                placeholder="Tên quốc gia"
                onChange={(e) => onChangeFilter(e.target.value)}
              />
            </form>
          </div>
        </div>

        <table className="table  table-striped">
          <thead>
            <tr>
              <td></td>
              <td>Quốc gia</td>
              <td>Số ca nhiễm</td>
              <td>Đã chết</td>
              <td>Ca mới</td>
              <td>Đã hồi phục</td>
              <td>Số ca hiện tại</td>
            </tr>
          </thead>
          <tbody>
            {pageList &&
              pageList.map((i) => {
                return (
                  <tr>
                    <td>
                      <img
                        className="flag"
                        src={i.countryInfo.flag}
                        alt="flag"
                      />
                    </td>
                    <td>{i.country}</td>
                    <td>{i.cases}</td>
                    <td>{i.deaths}</td>
                    <td>{i.todayCases}</td>
                    <td>{i.recovered}</td>
                    <td>{i.active}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemDisplay}
          totalItemsCount={initCountriesData.length}
          // pageRangeDisplayed={5}
          onChange={(page) => setCurrentPage(page)}
          itemClass="page-item"
          linkClass="page-link"
          hideFirstLastPages
        />
      </div>
    </>
  );
};

export default React.memo(CountriesTable);
