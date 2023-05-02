import React from 'react'
import myImg from '../assets/10021.jpg'

function StayInTouch() {
  return (
    <div className='h-screen flex font-FiraSans text-light-black mx-auto gap-10 pl-40 pt-40'>
        <div className='flex flex-col gap-4 text-xl'>
            <p className='font-Mavis font-bold text-6xl'>STAY IN TOUCH</p>
            <p>Wherever you are, whatever you do, you will always be aware of our new products</p>
            <p>A couple of clicks and we are always in touch</p>

            <label className='flex'>
                <input placeholder='Email Address' type='email' className=' outline-red-700 bg-gray-200'/>
                <div className='h-full w-16 bg-light-black text-full-white flex justify-center duration-200 hover:bg-purple-500 ease-in-out cursor-pointer'>&gt;</div>
            </label>
        </div>

        <div className='flex'>
            <img src={myImg}/>
        </div>

    </div>
  )
}

export default StayInTouch