import HomeIcon from '../assets/icons/HomeIcon.svg'
import SearchIcon from '../assets/icons/SearchIcon.svg'
import WatchIcon from '../assets/icons/WatchList.svg'
import MoviesIcon from '../assets/icons/MoviesIcon.svg'
import OriginalIcon from '../assets/icons/Originals.svg'
import SeriesIcon from '../assets/icons/SeriesIcon.svg'
import Logo from '../assets/logo.png'
import React from 'react'
import Avatar from '../assets/avatar.png'

function Navbar() {
  return (
    <header className='p-[10px] sticky left-0 z-50 top-0 bg-[#131520]'>
        <nav>
            <ul className='flex'>
                <li><a href="#"><img src={Logo} alt="Logo Disney" width={200} /></a></li>
                <div className='flex p-[10px] mt-[20px]'>
                    <li className='border-b-2 border-transparent p-[6px] transition-all duration-150 hover:border-white'><a href="#" className='flex *:mr-[20px]'>
                        <img src={HomeIcon} alt="" />
                        <span>HOME</span>    
                    </a></li>

                    <li className='border-b-2 border-transparent p-[6px] transition-all duration-150 hover:border-white'><a href="#" className='flex *:mr-[20px]'>
                        <img src={SearchIcon} alt="" />
                        <span>SEARCH</span>    
                    </a></li>


                    <li className='border-b-2 border-transparent p-[6px] transition-all duration-150 hover:border-white'><a href="#" className='flex *:mr-[20px]'>
                        <img src={WatchIcon} alt="" />
                        <span>WATCH LIST</span>    
                    </a></li>

                    <li className='border-b-2 border-transparent p-[6px] transition-all duration-150 hover:border-white'><a href="#" className='flex *:mr-[20px]'>
                        <img src={OriginalIcon} alt="" />
                        <span>ORIGINAL</span>    
                    </a></li>

                    <li className='border-b-2 border-transparent p-[6px] transition-all duration-150 hover:border-white'><a href="#" className='flex *:mr-[20px]'>
                        <img src={MoviesIcon} alt="" />
                        <span>MOVIES</span>    
                    </a></li>

                    <li className='border-b-2 border-transparent p-[6px] transition-all duration-150 hover:border-white'><a href="#" className='flex *:mr-[20px]'>
                        <img src={SeriesIcon} alt="" />
                        <span>SERIES</span>    
                    </a></li>


                </div>
                <div className='absolute top-[12px] right-12'>
                    <img src={Avatar} alt="User Avatar" className='cursor-pointer w-[60px]' />
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar