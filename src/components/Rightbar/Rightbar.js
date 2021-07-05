import React from "react";
import "./Rightbar.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Rightbar() {
  const info = (heading, subtitle) => (
    <div className="right__article">
      <div className="right__articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="right__articleright">
        <h4>{heading}</h4>
        <p>
          <i>{`${Math.floor(Math.random() * 100000) + 10000} views`}</i>
        </p>
      </div>
    </div>
  );
  return (
    <div className="right">
      <div className="right__header">
        <h2>Trending News</h2>
        <InfoIcon />
      </div>
      {info("React is in high demand", "trending")}
      {info("Dogecoin falls to new low", "trending")}
      {info("Bitcoin hits new high", "trending")}
    </div>
  );
}

export default Rightbar;
