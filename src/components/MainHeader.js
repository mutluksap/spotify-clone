import React from 'react'
import Icons from "../assets"

function MainHeader() {
  return (
    <div className='fixed top-0 h-16 box-border	py-3 px-9 flex justify-between bg-gray-900 items-center w-full'>
        <div className='flex gap-4'>
            <div className='rounded-full bg-gray-500 p-1 opacity-60'>
                <img src={Icons.PrevArrow}/>
            </div>
            <div className='rounded-full bg-gray-500 p-1 opacity-60'>
                <img src={Icons.NextArrow}/>
            </div>
        </div>
        <div>
            <div>
                <img src={Icons.User}/>
            </div>
        </div>
    </div>
  )
}

export default MainHeader