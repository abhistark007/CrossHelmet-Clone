import React from 'react'
// import bgCover from '../assets/10010.jpg'
import ButtonOne from './ButtonOne'
import './LandingSection.css'

function LandingSection() {
  return (
    <div 
    className="bg1 flex flex-col max-md:gap-2 gap-14 max-md:items-center max-md:justify-start flex-wrap h-screen">
            {/* <img src={bgCover} alt='bg-img' className='brightness-50 absolute'/> */}
            <div className='z-20 font-Mavis text-full-white max-md:pl-0 max-md:pt-2 pl-20 pt-20'>
                <p className='font-bold text-9xl tracking-wide'>CROSS</p>
                <p className='font-bold text-9xl tracking-wide'>HELMET X1</p>
            </div>

            <div className='z-20 font-FiraSans text-full-white flex flex-col gap-10 max-md:pl-0  pl-20 max-md:items-center'>
                <p className='text-3xl '>The future is not so far away</p>
                <ButtonOne txt="Order now!" color={"white"}/>
            </div>
    </div>
  )
}

export default LandingSection