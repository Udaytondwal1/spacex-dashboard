import React from 'react'
import Sidebar from '../Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'

export const Homepage = async () => {
  let past_data = await fetch("https://api.spacexdata.com/v4/launches")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log(error);
  });

  let upcoming_data = await fetch("https://api.spacexdata.com/v4/launches/upcoming")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log(error);
  });
  return (
    <div className='app'>
    <Sidebar/>
    <Dashboard upcomingdata={upcoming_data} data={past_data}/>
    </div>
  )
}

export default Homepage;
