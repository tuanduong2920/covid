import React from "react";
import Header from "../Components/Header/Header";

const PageHOC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageHOC;
