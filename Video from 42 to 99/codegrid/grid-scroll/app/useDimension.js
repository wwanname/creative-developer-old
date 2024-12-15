'use client'
import { useState, useEffect } from "react"

export default function useDimension () {
    const [diemension, setDimension] = useState({width: 0, height: 0})

    const onResize = () => {
        setDimension({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }


    useEffect(() => {
        onResize()
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    })

    return diemension
}