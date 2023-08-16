import { faBook, faHouse, faPlay, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const isSideBarOpen = useSelector((store) => store.appNav.isMenuOpen)

  // Early return pattern
  if (!isSideBarOpen) return null;

  return (
    <div className='w-52 pl-5'>
      <div>
        <div className='flex justify-start items-center gap-7 py-2 px-6 hover:bg-gray-100 rounded-md'>
          <FontAwesomeIcon icon={faHouse}/>
          <h1 className='font-semibold text-lg'><Link to="/">Home</Link></h1>
        </div>
        <div className='flex justify-start items-center gap-7 py-2 px-6 hover:bg-gray-100 rounded-md'>
          <FontAwesomeIcon icon={faVideo}/>
          <h1 className='font-semibold text-lg'>Shorts</h1>
        </div>
        <div className='flex justify-start items-center gap-7 py-2 px-6 hover:bg-gray-100 rounded-md'>
          <FontAwesomeIcon icon={faPlay}/>
          <h1 className='font-semibold text-lg'>Subscription</h1>
        </div>
        <div className='flex justify-start items-center gap-7 py-2 px-6 hover:bg-gray-100 rounded-md'>
          <FontAwesomeIcon icon={faBook}/>
          <h1 className='font-semibold text-lg'>Library</h1>
        </div>
      </div>
    </div>
  )
}

export default SideBar