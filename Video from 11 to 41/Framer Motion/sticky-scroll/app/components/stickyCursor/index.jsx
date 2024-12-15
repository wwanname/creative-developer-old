/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function index({ stickyElement }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouse = {
    x: useMotionValue(0), //useMotionValue dùng để re-render
    y: useMotionValue(0),
  };
  const cursorSize = isHovered ? 40 : 15;
  const manageMouseOver = (e) => {
    //mouseover và mouseleave từ sự kiện lắng nghe
    setIsHovered(true);
  };

  const manageMouseLeave = (e) => {
    setIsHovered(false);
  };

  const manageMouseMove = (e) => {
    //chỉnh tọa độ trỏ chuột ở giữa giống như trong bài thư mục MoveCursor trong modal component
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      stickyElement.current.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 }; // các dòng dưới này có phép tính đưa hình shape vô giữa trỏ chuột (nhưng không biết đơn vị tính như nào ra như này)
    const distance = { x: clientX - center.x, y: clientY - center.y };
    if (isHovered) {
      mouse.x.set(center.x - cursorSize / 2 + distance.y * 0.1); //syntax này ghép bởi useMotionValue
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1); //syntax này ghép bởi useMotionValue
    } else {
      mouse.x.set(clientX - cursorSize / 2); //syntax này ghép bởi useMotionValue
      mouse.y.set(clientY - cursorSize / 2); //syntax này ghép bởi useMotionValue
    }
  };

  useEffect(() => {
    // các sự kiện lắng nghe
    window.addEventListener("mousemove", manageMouseMove);
    stickyElement.current.addEventListener("mouseenter", manageMouseOver); //stickyelement tạo ở page.jsx và gắn nguồn vào header.tsx
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave); //stickyElement [stickyCursor <= page (tạo bằng useRef) <= Header (xác định phần tử gắn Ref)]
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      stickyElement.current.removeEventListener("mousenter", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave); //stickyElement [stickyCursor <= page (tạo bằng useRef) <= Header (xác định phần tử gắn Ref)]
    };
  }, [isHovered]);

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }; // thông số độ mượt của useSpring trong framer-motion
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        className={styles.cursor}
        animate={{ width: cursorSize, height: cursorSize }} // chỉ chỉnh tọa độ giữa của trỏ chuột, không phải chỉnh hình dạng của trỏ chuột
      ></motion.div>
    </div>
  );
}
