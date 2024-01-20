import React from "react";
import "./PastLaunch.css";

const PastLaunch = (props) => {
  return (
    <>
    <div className="container-1">
      <div className="info-cards">
        <div className="card">
          <div className="info">
            <span className="mission-name" id="past-name">
              {props.name}
            </span>
            <span className="disc" id="past-disc">
             {props.disc}
            </span>
          </div>
          <span id="Pdate">{props.LMdate}</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default PastLaunch;
