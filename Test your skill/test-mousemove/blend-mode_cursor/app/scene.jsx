'use client'
import React from "react"

export default function scene({setIsHovered}) {
    return (
        <div className="h-[100dvh] flex items-center justify-center">
            <h1 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="text-[4.5vw] max-w-[90vw] text-center text-white p-20 z-10">The quick brown fox jumps over the lazy dog</h1>
        </div>
    )
}