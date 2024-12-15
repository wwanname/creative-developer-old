import Image from 'next/image'

const Navbar = () => {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <Image src="/assets/images/apple.svg" alt="Apple" width={14} height={18} />

                <div className='flex flex-1 justify-center  max-sm:hidden'>
                    {["Store", "Mac", "iPhone", "Support"].map((nav) => (
                        <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                            {nav}
                        </div>    
                    ))}
                </div>
            </nav>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <Image src="/assets/images/search.svg" alt="Search" width={18} height={18} />
                <Image src="/assets/images/bag.svg" alt="Bag" width={18} height={18} />
            </div>
        </header>
    )
}

export default Navbar