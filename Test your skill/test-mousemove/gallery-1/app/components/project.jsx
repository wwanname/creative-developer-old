'use client';
import React from 'react'

export default function index({title, setIsActive, index}) {

    return (
        <div onMouseOver={() => {setIsActive({active: true, index})}} onMouseLeave={() => {setIsActive({active: false, index})}} className='flex group group-hover:opacity-50 w-full justify-between items-center pt-[50px] pr-[100px] pb-[50px] pl-[100px] cursor-pointer transition-all duration-75 border-b-[1px] border-solid border-stone-950 first-of-type:border-t-[1px]'>
            <h2 className='group-hover:translate-x-[-10px] group-hover:opacity-50 text-3xl font-semibold transition-all duration-75'>{title}</h2>
            <p className='group-hover:translate-x-[10px] group-hover:opacity-50 font-light transition-all duration-75'>Design & Development</p>
        </div>
    )
}