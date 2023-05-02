import React from 'react'
import crossHelmetLogo from '../assets/10002.svg'
import shoppingCartLogo from '../assets/10031.svg'

function NavBar() {
  return (
    <div className='flex bg-full-black items-center justify-between px-20 flex-wrap py-5'>
        {/* Left Part */}
        <div className='flex gap-3'>
            <img src={crossHelmetLogo} className='cursor-pointer' alt='Website Logo'/>
            <h1 className='font-Mavis text-full-white font-bold text-3xl cursor-pointer'>CROSSHELMET</h1>
        </div>


        {/* Right Part */}
        <div className='flex gap-16 text-xl'>
            <ul className='flex list-none gap-10 text-full-white '>
                <li className='cursor-pointer hover:border-full-white duration-200 hover:border-b-4 flex flex-col'>Home</li>
                <li className='cursor-pointer hover:border-full-white duration-200 hover:border-b-4 flex flex-col'>About Us</li>
                <li className='cursor-pointer hover:border-full-white duration-200 hover:border-b-4 flex flex-col'>Features</li>
                <li className='cursor-pointer hover:border-full-white duration-200 hover:border-b-4 flex flex-col'>Equipment</li>
                <li className='cursor-pointer hover:border-full-white duration-200 hover:border-b-4 flex flex-col'>Feedback</li>
                <li className='cursor-pointer hover:border-full-white duration-200 hover:border-b-4 flex flex-col'>Contacts</li>
            </ul>
            <ul className='flex list-none gap-10 text-full-white'>
                <li className='cursor-pointer hover:border-full-white duration-200 hover:border-b-4 flex flex-col'>Eng</li>
                <li className='cursor-pointer'><img src={shoppingCartLogo} alt='Shopping Cart'/></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar