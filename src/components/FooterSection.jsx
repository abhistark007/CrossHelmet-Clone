import React from 'react'
import crossHelmetLogo from '../assets/10002.svg'
import fb from '../assets/10005.svg'
import ins from '../assets/10006.svg'
import yt from '../assets/10007.svg'

function FooterSection() {
    return (
        <div className='flex bg-black font-FiraSans text-full-white py-5 items-center justify-between px-10'>
            <div className='flex gap-3'>
                <img src={crossHelmetLogo} className='cursor-pointer' alt='Website Logo' />
                <h1 className='font-Mavis text-full-white font-bold text-2xl cursor-pointer'>CROSSHELMET</h1>
            </div>


            <ul className='flex flex-col list-none gap-4'>
                <li>Home</li>
                <li>About Us</li>
            </ul>



            <ul className='flex flex-col list-none gap-4'>
                <li>Features</li>
                <li>Equipment</li>
            </ul>


            <ul className='flex flex-col list-none gap-4'>
                <li>Feedback</li>
                <li>Contacts</li>
            </ul>


            <ul className='flex flex-col list-none gap-4'>
                <li>+38 0000 0000 0000</li>
                <li>+07 7888 2222 1111</li>
            </ul>


            <div className='flex flex-col gap-4 items-center'>
                <div className='flex gap-2'>
                    <img className='cursor-pointer' src={fb}/>
                    <img className='cursor-pointer'  src={ins}/>
                    <img className='cursor-pointer'  src={yt}/>
                </div>
                <p className='cursor-pointer'>crosshelmet@gmail.com</p>

            </div>
        </div>
    )
}

export default FooterSection