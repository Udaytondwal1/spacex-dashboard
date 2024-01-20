"use client";
import "./Dashboard.css";
import PastLaunch from "../InfoItems/PastLaunch";
import UpcomingLaunch from "../InfoItems/UpcomingLaunch";
import { useState } from "react";

const Dashboard = (props) => {

  // usestate and Ldate function is used for date converter from unix to date format
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");

  const handleChangeS = (event) => {
    setSdate(event.target.value);
  };
  const handleChangeE = (event) => {
    setEdate(event.target.value);
  };


  function Ldate(time) {
    // Use the Date constructor to create a Date object from the date unix
    var date = new Date(time * 1000);
    // Get the year, month, day, hour, minute, and second from the Date object
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // Months are zero-based
    var day = date.getDate();
    // Format the date and time as a string
    var dateAndTime = day + "-" + month + "-" + year;
    return dateAndTime;
  }

//* ................................usestate to Change state of dashboard Comp. to For FIlter the data.
  var [pastLaunches, setPastLaunches] = useState(
    (pastLaunches = props.data
      .slice(0, 40)
      .map((elem, i) => (
        <PastLaunch
          key={i}
          name={elem.name}
          disc={elem.details}
          LMdate={Ldate(elem.date_unix)}
        />
      )))
  );


  var upcomingLaunches = props.upcomingdata.map((elem, i) => (
    <UpcomingLaunch
      key={i}
      name={elem.name}
      disc={elem.details}
      lMdate={elem.date_unix}
    />
  ));

 
 //* use setfilter function to filter data according to date and also change the state of past launch comp. here.
  const SetFilter = () => {
    console.log(sdate);
    console.log(edate);

    const StartDate_unix = Math.floor(new Date(sdate).getTime() / 1000);
    const EndDate_unix = Math.floor(new Date(edate).getTime() / 1000);

    if (sdate != "" && edate != "") {
      var filterPastLaunch = props.data.filter((data) => {
        return (
          data.date_unix >= StartDate_unix && data.date_unix <= EndDate_unix
        );
      });
      var FilteredpastLaunches = filterPastLaunch.map((elem, i) => (
        <PastLaunch
          key={i}
          name={elem.name}
          disc={elem.details}
          LMdate={Ldate(elem.date_unix)}
        />
      ));
      setPastLaunches(FilteredpastLaunches);

    } else {
    
    var pastLaunches = props.data
       .slice(0, 40)
       .map((elem, i) => (
         <PastLaunch
           key={i}
           name={elem.name}
           disc={elem.details}
           LMdate={Ldate(elem.date_unix)}
         />
       ));

       setPastLaunches(pastLaunches);
    }
  };

  return (
   
      <div className="dashboard">
        <div className="past-launches">
          <h2 className="headings">Past Launches</h2>
          <div className="filters">
            <span>Filter</span>
            <input type="date" name="Start Date" onChange={handleChangeS} />
            <input type="date" name="End Date" onChange={handleChangeE} />
            <button role="button" onClick={SetFilter} style={{padding: "7px", borderRadius: "8px", border: "none", marginLeft: "2px", cursor:"pointer"}}>
              Apply
            </button>
            <div id="scroll_1">{pastLaunches}</div>
          </div>
        </div>
        <div className="upcoming">
          <h2 className="headings">Upcoming Missions</h2>
          <div id="scroll_2">{upcomingLaunches}</div>
        </div>
      </div>
  );
};

export default Dashboard;

