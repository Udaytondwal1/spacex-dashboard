import React from 'react'
import './UpcomingLaunch.css'

const UpcomingLaunch = (props) => {
  return (
    <>
    <div className='container-2'>
      <div className="info-cards">
        <div className="card">
          <div className="info">
            <span className="mission-name">{props.name}</span>
            <span className="disc">
              {props.disc}
            </span>
          </div>
          <span className="date">{props.LMdate}</span>
        </div>
      </div>
      </div>
      </>
  );
};

export default UpcomingLaunch;