import React from 'react'
import { CCarousel, CCarouselItem } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import ImageInfoCard from './ImageInfoCard'
import './OurEquipmentSection.css'

function OurEquipmentSection() {
    return (
        <div className='bg3  flex flex-col items-center px-52 h-screen justify-center pt-5'>
            <p className='font-Mavis font-bold text-6xl text-light-black'>OUR</p>
            <p className='font-Mavis font-bold text-6xl bg-light-black text-full-white mb-20'>TEAM</p>

            <div className='flex justify-center items-center '>
            <CCarousel controls indicators >
                <CCarouselItem>
                    <ImageInfoCard />
                </CCarouselItem>
                <CCarouselItem>
                    <ImageInfoCard />
                </CCarouselItem>
                <CCarouselItem>
                    <ImageInfoCard />
                </CCarouselItem>
            </CCarousel>
            </div>
        </div>
    )
}

export default OurEquipmentSection