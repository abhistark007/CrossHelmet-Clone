import React from 'react'
import './OurGoalsSection.css'
import { CCarousel, CCarouselItem } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import InfoCardOne from './InfoCardOne'

function OurGoalsSection() {
    return (
        <div
            className='bg bg-no-repeat bg-cover bg-center h-screen text-white'>
            <p className='font-Mavis font-bold text-full-white text-6xl pt-10 pl-10'>OUR <span className='text-full-black bg-full-white'>GOALS</span></p>
            <div className='flex justify-end ml-[45%] pt-18 '>
            <CCarousel controls indicators>
                <CCarouselItem>
                    <InfoCardOne />
                </CCarouselItem>
                <CCarouselItem>
                    <InfoCardOne />
                </CCarouselItem>
                <CCarouselItem>
                    <InfoCardOne />
                </CCarouselItem>
            </CCarousel>
            </div>
        </div>
    )
}

export default OurGoalsSection