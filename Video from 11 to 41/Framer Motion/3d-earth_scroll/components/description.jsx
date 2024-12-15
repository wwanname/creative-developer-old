import React from 'react'

export default function index({data, selectedProject}) {

    const crop = (string, maxLength) => {
        return string.slice(0, maxLength);
    }

    return (
        <div className="absolute top-1 z-20 pointer-events-none w-full h-full">
            {
                data.map( (project, i) => {
                    const { title, description } = project;
                    return (
                    <div
                        key={i}
                        className="bg-[#ec4e39] flex justify-between items-center px-[10%] transition-all duration-300"
                        style={{clipPath: selectedProject.isActive && selectedProject.i == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <p className='text-[#010101] font-bold text-[8vw] uppercase leading-[7.5vw] m-0 relative z-10 w-full'>{crop(title, 9)}</p>
                        <p className='w-[40%] text-[1vw] font-bold'>{description}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}