import React from 'react'
import './CountrySymbol.css'

function CountrySymbol({ txt,s}) {
    
    return (
        <div className="rainbow-text text-3xl flex justify-center items-center border-2 border-purple-400 bg-light-black hover:scale-125 duration-200 cursor-pointer"  >
            <span className="block-line"><span>{txt}</span></span>
        </div>
    )
}

export default CountrySymbol