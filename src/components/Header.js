import React from 'react'
import { ReactComponent as Logo } from "./logo.svg";

function Header() {
  return (
    <div className='py-6 px-2 bg-black w-60 h-full'>
        <div>
            <Logo className='h-40 w-36 my-0 mx-auto'/>
        </div>
    </div>
  )
}

export default Header