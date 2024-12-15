import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = e => {
    const {clientX, clientY} = e;
    setMousePosition({
      x: clientX,
      y: clientY
    })
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return mousePosition;
};

export default useMousePosition;