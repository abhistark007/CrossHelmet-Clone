import React from 'react'
import yourImg from '../assets/glove.png'
import ButtonOne from './ButtonOne'

function NewArrivalsContainer() {
  return (
    <div className='flex flex-col bg-light-black  w-72 items-center p-10 gap-5 max-md:w-[90%]'>
        <img src={yourImg} />
        <ButtonOne txt={"Buy now!"} color={"white"}/>
    </div>
  )
}

export default NewArrivalsContainer