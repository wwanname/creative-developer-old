import { useEffect, useState } from 'react'

export default function useWindow() {
  const [dimension, setDimension] = useState({width: 0, height: 0})

  const resize = () => {
    setDimension({
      width: window.innerWidth,
      height: Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      )
    })
  }

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [])

  return dimension
}