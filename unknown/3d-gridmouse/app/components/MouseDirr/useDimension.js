/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from "react"

export default function useDimension() {
    const [dimenstion, setDimension] = useState({width: 0, height: 0});
    const resize = () => {
        const {innerWidth, innerHeight} = window;
        setDimension({
            width: innerWidth,
            height: innerHeight
        })
    }

    useEffect(() => {
        resize()
        window.addEventListener("resize", resize)
        return(() => window.removeEventListener("resize", resize))
    }, [])

    return dimenstion
}