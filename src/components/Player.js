import React from 'react'
import Icons from "../assets"

function Player() {
  return (
    <div className='fixed bottom-0 left-0 h-24 bg-neutral-900 w-full flex justify-between px-4 items-center'>
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
        <div className='flex flex-col w-2/5'>
            <div className='mb-2 flex items-center'>
                <div className='flex-1 flex justify-end'>
                    <div className='shrink-0 w-8'>
                        <img src={Icons.Remix}/>
                    </div>
                    <div className='shrink-0 w-8'>
                        <img src={Icons.PrevMusic}/>
                    </div>
                </div>
                <div className='bg-white p-2 rounded-full w-8'>
                    <img src={Icons.Pause}/>
                </div>
                <div className='flex-1 flex'>
                    <div className='shrink-0 w-8 flex justify-end'>
                        <img src={Icons.NextMusic}/>
                    </div>
                    <div className='shrink-0 w-8 flex justify-end'>
                        <img src={Icons.Loop}/>
                    </div>
                </div>
            </div>
            <div className='flex items-center rounded-full'>
                <div className='text-gray-400 pr-2 text-xs'>1.22</div>
                <div className='h-1 bg-gray-500	 flex-1 rounded-lg'></div>
                <div className='text-gray-400 pl-2 text-xs'>1.22</div>
            </div>
        </div>
        <div className='flex'>
            <div className='p-2'>
                <img src={Icons.User}/>
            </div>
            <div className='p-2'>
                <img src={Icons.TripleLine}/>
            </div>
            <div className='p-2'>
                <img src={Icons.Device}/>
            </div>
            <div className='p-2'>
                <img src={Icons.Sound}/>
            </div>
            <div></div>
            <div className='p-2'>
            <img src={Icons.Zoom}/>
            </div>
        </div>
    </div>
  )
}

export default Player