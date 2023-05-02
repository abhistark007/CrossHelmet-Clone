import React from 'react'

function ButtonOne({txt,color}) {
  if(color==="white")
  return (
    <div className='flex gap-4 text-full-black bg-full-white w-fit px-3 h-10 hover:bg-purple-500 duration-200 ease-in-out cursor-pointer'>
        <div className='border-r-4 border-light-black pr-3 items-center flex'>{txt}</div>
        <div className='flex items-center'>
        ➔
        </div>
    </div>
  )
  return (
    <div className='flex gap-4 text-full-white bg-light-black w-fit px-3 h-10 hover:bg-purple-500 duration-200 ease-in-out cursor-pointer'>
        <div className=' pr-3 items-center flex'>{txt}</div>
        <div className='flex items-center'>
        ➔
        </div>
    </div>
  )

  
}

export default ButtonOne