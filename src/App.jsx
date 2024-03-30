import Navbar from './components/Navbar'
import Slider from './components/Slider'
import SectionLogo from './components/Sectionlogo'
import React, { useState } from 'react'
import MoviesSection from './components/MoviesSection'
import RequireLogin from './components/RequireLogin'
const login = localStorage.getItem('login')

function App() {
  
  if(login == 'true'){
    return (
      <>
       <Navbar />
        <section className='p-[6px]'>
        <article className='mt-[20px]'>
          <Slider />
          <div>
            <SectionLogo />
          </div>
          <div>
            <MoviesSection />
          </div>
        </article>
      </section>
      </> 
    )
  }else{
    return(
      <RequireLogin />
    )
   
  }
}

function RouterApp(){
  const [setCurrentPath, currentPath] = useState(window.location.pathname);
  return(
    <div>
      {setCurrentPath == '/' && <App />}
    </div>
  )
}

export default RouterApp;
