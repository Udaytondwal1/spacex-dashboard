"use client"
import React from 'react'
import './Sidebar.css'
import Link from 'next/link'

const Sidebar = () => {
  return (
  <>
  <div className='main'>
    <div className='card'>
    <h1 className='heading'>SpaceX</h1>
    <div className='menu'>
        <button>Dashboard</button>
        <Link href={'./Login'}><button>Logout</button></Link>
    </div>
    </div>
  </div>
  </>
  )
}

export default Sidebar