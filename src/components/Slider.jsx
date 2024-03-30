import SliderImg from '../assets/sliderimg.jpg'
import React from 'react'

function SectionMovies() {
  return (
    <div className='w-[100%] flex items-center justify-center h-[600px] p-[6px] '>
      <img className='w-[95%] h-[100%] rounded-lg object-cover' src={SliderImg} alt="" />
    </div>
  )
}

export default SectionMovies