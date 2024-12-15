/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const colors = ["#c32d22", "#f5c63f", "#457ec4", "#365fdb"];

export default function Cursor({ isHovered }) {
  const size = isHovered ? 400 : 30;
  const delay = isHovered ? 0.015 : 0.005;
  /*const circle = useRef();*/ //1 trỏ chuột
  const circles = useRef([]); //nhiều trỏ chuột
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };

    /* moveCircle(mouse.current.x, mouse.current.y); */ //Bước 1
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a; //x = 10(100%), y = 0(0%), a = 0.1(10%) thì kết quả là 9(90%)

  const moveCircle = (x, y) => {
    circles.current.forEach((circle, i) => {
      gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 }); // dùng để center
    });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current; //delay / ease

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };
    moveCircle(mouse.current.x, mouse.current.y); //Bước 2, đáng lẽ ra để ẩn nhưng dùng cả 2 sẽ mượt hơn
    moveCircle(delayedMouse.current.x, delayedMouse.current.y); //Bước 3
    window.requestAnimationFrame(animate); //dùng để tránh delay
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  return (
    <>
      {colors.map((color, i, array) => {
        return (
          <div
            ref={(ref) => (circles.current[i] = ref)}
            key={color}
            className="fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none"
            style={{
              backgroundColor: color,
              width: size,
              height: size,
              filter: `blur(${isHovered ? 20 : 2}px)`,
              transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${
                (array.length - i) * delay
              }s linear`,
            }}
          />
        );
      })}
    </>
  );
}
