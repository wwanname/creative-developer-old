'use client'
import { useEffect } from "react"
import { useState } from "react"

export default function useDimension() {
    const [dimension, setDimension] = useState({width: 0, height: 0})

        const onResize = () => {
            const {innerWidth, innerHeight} = window
            setDimension ({
                width: innerWidth,
                height: innerHeight
            })
        }
        useEffect(() => {
            onResize()
            window.addEventListener("resize", onResize)
            return(() => window.removeEventListener("resize"), onResize)
        })
    return dimension
}