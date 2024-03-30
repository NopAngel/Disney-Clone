import StarWars from '../assets/starwars.png'
import Logo from '../assets/logo.png'
import Pixar from '../assets/pixar.png'
import Marvel from '../assets/marvel.png'
import nationG from '../assets/nationG.png'
import React from 'react'

function Slider() {
  return (
    <div className='flex gap-2 md:gap-10 p-2 px-5 md:px-16 *:m-[6px] p-[10px]'>
          <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 w-[300px] h-[150px]'>
            <img src={Logo} alt="" className='w-full text-center mt-[20px]' />
          </div>

          <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 w-[300px] h-[150px]'>
            <img src={Pixar} alt="" className='w-full text-center mb-[20px]' />
          </div>

          <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 w-[300px] h-[150px]'>
            <img src={Marvel} alt="" className='w-full text-center mb-[20px]' />
          </div>

          <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 w-[300px] h-[150px]'>
            <img src={StarWars} alt="" className='w-full text-center mb-[10px]' />
          </div>

          <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 w-[300px] h-[150px]'>
            <img src={nationG} alt="" className='w-full text-center mb-[10px]' />
          </div>
    </div>
   
  )
}

export default Slider