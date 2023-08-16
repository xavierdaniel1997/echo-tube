
import React from 'react'
import FilterButtons from './FilterButtons'

const buttonLists = ["All", "Sports", "Tech", "News", "Cooking", "Travel", "Bikes", "Car", "Musics", "Movies", "Vlogs",  "React", "Planting", "Fishing", "Hunding"]

const FiterButtonLists = () => {
  return (
    <div className='flex gap-4'>
      {buttonLists.map((buttons, index) => <FilterButtons key={index} buttonName={buttons}/> )}
    </div>
  ) 
}

export default FiterButtonLists
