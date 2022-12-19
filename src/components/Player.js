import React from 'react'
import Icons from "../assets"

function Player() {
  return (
    <div className='h-24 absolute bottom-0 bg-neutral-900 w-full flex justify-between px-4 items-center'>
        <div className='flex'>
            <img className='w-14' src='https://i.scdn.co/image/ab67616d0000485149fbfede365b32ce524eec19'/>
            <div className='flex items-start justify-center flex-col mx-3.5'>
                <span className='text-sm text-white font-medium	'>Boynumdaki Chain</span>
                <span className='text-xs text-neutral-400'>Murda, Ezhel</span>
            </div>
            <div className='w-8 flex items-center justify-center'>
                <img src={Icons.Heart}/>
            </div>
            <div className='w-8 flex items-center justify-center'>
                <img src={Icons.Heart}/>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='mb-2 flex items-center'>
                <div className='flex-1 flex'>
                    <div className='shrink-0'>
                        <img src={Icons.Remix}/>
                    </div>
                    <div className='shrink-0'>
                        <img src={Icons.PrevMusic}/>
                    </div>
                </div>
                <div className='bg-white p-2 rounded-full w-8'>
                    <img src={Icons.Pause}/>
                </div>
                <div className='flex-1'></div>
            </div>
            <div className=''></div>
        </div>
        <div></div>
    </div>
  )
}

export default Player