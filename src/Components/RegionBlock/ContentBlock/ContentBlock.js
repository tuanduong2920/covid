import React from "react";
const ContentBlock = ({caption, value}) => {
  return (
    <div className="content-block col-xl-3 col-lg-4 col-md-6 ">
      <h5 className="content-block-header">{caption}</h5>
      <p className="content-block-content">{value}</p>
    </div>
  );
};

export default ContentBlock;
