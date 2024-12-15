import React from 'react'
import Image from 'next/image'

const Nav = () => {
    return (
        <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between sm:h-10 lg:justify-start'>
            <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'></div>
                <span className='text-3xl text-neutral-200 mr-1 pt-2'>
                    <Image
                        src="/assets/logo.svg"
                        width={128 / 3}
                        height={114 / 3}
                        className="h-8 w-auto sm:h-10"
                        alt="Logo"
                    />
                </span>
            </div>
        </div>
    )
}

export default Nav