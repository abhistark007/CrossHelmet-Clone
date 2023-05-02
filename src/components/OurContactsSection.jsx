import React, { useState } from 'react'
import './OurContactsSection.css'
import CountryInfoCard from './CountryInfoCard'
import CountrySymbol from './CountrySymbol'


function OurContactsSection() {
    let [s, setS] = useState(1);
    if(s===1){
        console.log("TRUE");
    }

    return (
        <div className='bg5 h-screen flex gap-28 w-full justify-between px-20 relative'>
            <div className='flex flex-col'>
                <p className='font-Mavis font-bold tracking-wider text-6xl text-full-white'>OUR</p>
                <p className='font-Mavis font-bold tracking-wider text-6xl bg-full-white text-light-black w-fit'>CONTACTS</p>

                {
                    s===1?<div onClick={()=>{setS(1)}}><CountryInfoCard/></div>:null
                }

            </div>

            <div className='w-[50%] h-[108vh]  bg-light-black absolute right-10 -top-7 rounded-2xl flex flex-col justify-between'>
                <div className='grid grid-cols-2 w-full h-full'>
                    <CountrySymbol txt={"EUROPE"}  s={s}/>
                    <CountrySymbol txt={"AUSTRALIA"}  s={s}/>

                    <CountrySymbol txt={"N. AMERICA"}  s={s}/>
                    <CountrySymbol txt={"ASIA"} s={s}/>
                </div>
            </div>

        </div>
    )
}

export default OurContactsSection