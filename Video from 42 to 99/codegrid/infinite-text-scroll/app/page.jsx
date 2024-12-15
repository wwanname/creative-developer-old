/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const title = [
  {
    category: "Media",
    name: "Nexus",
  },
  {
    category: "Workshop",
    name: "Betwwen Lines",
  },
  {
    category: "Media Kit",
    name: "The Sigma",
  },
  {
    category: "Cinema",
    name: "Le Stelle Cadenti",
  },
  {
    category: "Video Clip",
    name: "Quantum Pulse",
  },
  {
    category: "Advertising",
    name: "Neon Flow",
  }
]

export default function Home() {
  const menu = useRef()
  const menuItems = useRef([])

  useLayoutEffect(() => {
    if (menu.current && menuItems.current.length > 0) {
    let currentScrollPosition = 0

    const onWheelScroll = (e) => {
      currentScrollPosition -= e.deltaY
    }

    let prevY = 0
    let currentY = 0
    let isDragging = false
    const onDragEnd = () => {
      isDragging = false
      menu.current.classList.remove("is-dragging")
    }

    const onDragStart = (e) => {
      prevY = e.clientY
      isDragging = true
      menu.current.classList.add("is-dragging")
    }

    const onDragMove = (e) => {
      if (!isDragging) return
      currentY = e.clientY
      currentScrollPosition -= (currentY - prevY) * 3
      prevY = currentY
    }

    let menuItemHeight = menuItems.current[0].clientHeight
    let totalMenuHeight = menuItems.current.length * menuItemHeight

    const adjustMenuItemsPosition = (scroll) => {
      menuItems.current.forEach((menuItem, index) => {
        gsap.set(menuItem, {
          y: index * menuItemHeight + scroll,
          modifiers: {
            y: (y) => {
              const wrappedY = gsap.utils.wrap(
                -menuItemHeight,
                totalMenuHeight - menuItemHeight,
                parseInt(y)
              )
              return `${wrappedY}px`
            }
          }
        })
      })
    }

    let lastScrollY = 0
    let smoothScrollY = 0
    const lerp = (start, end, factor) => start * (1 - factor) + end * factor

    const animate = () => {
      smoothScrollY = lerp(smoothScrollY, currentScrollPosition, 0.1)
      console.log(smoothScrollY)
      adjustMenuItemsPosition(smoothScrollY)

      const scrollSpeed = smoothScrollY - lastScrollY
      lastScrollY = smoothScrollY

      gsap.to(menuItems.current, {
        scale: 1 - Math.min(Math.abs(scrollSpeed), 100) * 0.0075,
        rotate: scrollSpeed * 0.2
      })

      requestAnimationFrame(animate)
    }

    animate()

    menu.current.addEventListener("mousewheel", onWheelScroll)
    menu.current.addEventListener("touchstart", onDragStart)
    menu.current.addEventListener("touchmove", onDragMove)
    menu.current.addEventListener("touchend", onDragEnd)
    menu.current.addEventListener("mousedown", onDragStart)
    menu.current.addEventListener("mousemove", onDragMove)
    menu.current.addEventListener("mouseleave", onDragEnd)
    menu.current.addEventListener("mouseup", onDragEnd)
    menu.current.addEventListener("selectstart", () => false)

    window.addEventListener("resize", () => {
      menuItemHeight = menuItems.current[0].clientHeight
      totalMenuHeight = menuItems.current.length * menuItemHeight
    })

    return(() => {
      menu.current.removeEventListener("mousewheel", onWheelScroll)
      menu.current.removeEventListener("touchstart", onDragStart)
      menu.current.removeEventListener("touchmove", onDragMove)
      menu.current.removeEventListener("touchend", onDragEnd)
      menu.current.removeEventListener("mousedown", onDragStart)
      menu.current.removeEventListener("mousemove", onDragMove)
      menu.current.removeEventListener("mouseleave", onDragEnd)
      menu.current.removeEventListener("mouseup", onDragEnd)
      menu.current.removeEventListener("selectstart", () => false)
      window.removeEventListener("resize", () => {
        menuHeight = menu.current.clientHeight
        menuItemHeight = menuItems.current[0].clientHeight
        totalMenuHeight = menuItems.current.length * menuItemHeight
      })
    })
  }
  }, [])
  return (
    <>
      <div ref={menu} className="menu">
        <div className="menu-img">
          <img src="./bg.jpg" alt="" />
        </div>

        <ul className="menu-wrapper">
          {title.map((item, i) => {
            return (
            <li ref={el => menuItems.current[i] = el} key={i} className="menu-item">
              <div className="item-category"><p>{item.category}</p></div>
              <div className="item-name"><p>{item.name}</p></div>
            </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
