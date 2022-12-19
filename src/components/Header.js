import React from 'react'
import Logo from "../assets/icons/logo.svg";
import Icons from "../assets"

function Header() {
    
  return (
    <div className='py-6 px-2 bg-black w-64 h-full'>
        <div className='px-2 mb-5'>
            <img className='h-10 w-36' src={Logo} alt="spotify"/>
        </div>
        <ul>
            <li>
                <a className='px-4 flex gap-x-4 items-center h-10' href="#">
                    <img src={Icons.HomeActive}/>
                    <span className='text-white text-sm font-bold'>Ana sayfa</span>
                </a>
            </li>
            <li>
                <a className='px-4 flex gap-x-4 items-center h-10 text-neutral-400 hover:text-white' href="#">
                    <img src={Icons.Search}/>
                    <span className='text-sm font-bold'>Ara</span>
                </a>
            </li>
            <li>
                <a className='px-4 flex gap-x-4 items-center h-10 text-neutral-400 hover:text-white' href="#">
                    <img src={Icons.Libary}/>
                    <span className='text-sm font-bold'>Kitaplığın</span>
                </a>
            </li>
        </ul>
        <div className='mt-6'>
            <div>
                <a className='pl-4 flex items-center items-center h-10 text-neutral-400 opacity-80 hover:opacity-100' href="#">
                    <div className='bg-gray-500 rounded-sm p-1.5 mr-4'>
                        <img src={Icons.Plus} alt="" />
                    </div>
                    <span className='text-sm font-bold'>Çalma Listesi Oluştur</span>
                </a>
            </div>
            <div>
                <a className='pl-4 flex items-center items-center h-10 text-neutral-400 opacity-80 hover:opacity-100' href="#">
                    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-sm p-1.5 mr-4'>
                        <img src={Icons.HeartActive} alt="" />
                    </div>
                    <span className='text-sm font-bold'>Beğenilen Şarkılar</span>
                </a>
            </div>
        </div>
        <div className='px-4 py-2'>
            <div className='border-t border-zinc-700'>
                <div className='py-2'>
                   <ul className='text-neutral-400'>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                        <li>
                            <a className='flex items-center h-8 text-sm' href="#">1. List</a>
                        </li>
                    </ul> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header