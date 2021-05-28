import React from "react";
import Header from "../../Components/Header/Header";

const PageHOC = ({ children }) => {
  if (children === undefined) return null;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageHOC;
