export default function Burger({openMenu}) {
    return (
        <div onClick={() => {openMenu()}} className="group size-40 bg-black flex flex-col justify-end fixed top-0 right-0 p-3 cursor-pointer">
            <div className="bg-[#D3FD50] w-full absolute top-0 left-0 h-0 group-hover:h-full -z-10 transition-all duration-300"></div>
            <svg className="absolute right-5 top-5" width="56" height="7" viewBox="0 0 56 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line className="transition-all duration-300 group-hover:stroke-black" x1="56" y1="0.5" x2="4.37114e-08" y2="0.500005" stroke="white"/>
                <line className="transition-all duration-300 group-hover:stroke-black" x1="56" y1="6.5" x2="28" y2="6.5" stroke="white"/>
            </svg>
            <p className="text-white m-0 uppercase transition-all duration-300 group-hover:text-black">Menu</p>
        </div>
    )
}