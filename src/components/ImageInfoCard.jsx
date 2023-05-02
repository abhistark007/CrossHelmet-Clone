import React from 'react'
import myImage from '../assets/10032.jpg'
import ButtonOne from './ButtonOne'

function ImageInfoCard() {
    return (
        <div className='flex gap-5 px-24 pb-24 pt-10 max-lg:flex-col max-lg:items-center'>
            <div className='flex border-r-4  border-r-light-black justify-center items-center max-lg:border-none'>
                <img src={myImage} alt='img' />
            </div>

            <div className='flex flex-col gap-3 max-lg:items-center'>
                <p className='font-Mavis font-bold bg-light-black text-full-white text-2xl w-fit p-2'>CROSSHELMET X1</p>
                <p className='font-FiraSans text-light-black text-2xl max-lg:hidden flex-wrap flex'>It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English.
                </p>
                <p className='font-FiraSans text-light-black text-3xl'>$ 1600</p>

                <ButtonOne txt={"Buy now!"} color={"black"} />

            </div>
        </div>
    )
}

export default ImageInfoCard