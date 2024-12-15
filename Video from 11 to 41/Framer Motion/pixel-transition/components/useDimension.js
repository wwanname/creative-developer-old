'use client'
import { useEffect } from "react"
import { useState } from "react"

export default function useDimension() {
    const [dimension, setDimension] = useState({width: 0, height: 0})

    const resize = () => {
        const {innerWidth, innerHeight} = window
        setDimension({
            width: innerWidth,
            height: innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener("resize", resize);
        return(() => window.removeEventListener("resize", resize))
    }, [])

    return dimension
}