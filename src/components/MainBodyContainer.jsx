import React from 'react'
import FilterButtonLists from './FilterButtonLists'
import VideoContainer from './VideoContainer'

const MainBodyContainer = () => {
  return (
    <div className='px-2 pt-1'>
      <FilterButtonLists/>
      <VideoContainer/>
      </div>
  )
}

export default MainBodyContainer