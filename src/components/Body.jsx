import React from 'react'
import SideBar from "../components/SideBar"
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex px-5 pt-3'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body