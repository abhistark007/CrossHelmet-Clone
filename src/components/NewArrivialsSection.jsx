import React from 'react'
import './NewArrivialsSection.css'
import { CCarousel, CCarouselItem } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import NewArrivalsContainer from './NewArrivalsContainer'

function NewArrivialsSection() {
    return (
        <div className='bg4 h-screen'>
            <p className='font-Mavis font-bold tracking-wider text-full-white text-6xl pl-10 pt-10 max-md:text-center'>OUR <span className='bg-full-white text-light-black'>NEW ARRIVALS</span></p>
            <div className='mt-40 max-md:mt-2'>
            <CCarousel controls indicators >
                <CCarouselItem>
                    
                    <div className='flex gap-10 justify-center max-md:flex-col max-md:items-center'>
                    <NewArrivalsContainer />
                    <NewArrivalsContainer />
                    <NewArrivalsContainer />
                    </div>
                   
                </CCarouselItem>
                <CCarouselItem>
                    
                <div className='flex gap-10 justify-center max-md:flex-col max-md:items-center'>
                    <NewArrivalsContainer />
                    <NewArrivalsContainer />
                    <NewArrivalsContainer />
                    </div>
                    
                </CCarouselItem>
            </CCarousel>
            </div>
        </div>
    )
}

export default NewArrivialsSection