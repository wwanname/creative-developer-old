/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { CustomEase, Flip } from "gsap/all";

export default function Home() {
  const itemsCount = 18;
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  useEffect(() => {
    if (isDomReady) {
      setInitialLinearLayout()
    }
  }, [isDomReady]);

  useLayoutEffect(() => {
    gsap.registerPlugin(CustomEase, Flip);
    CustomEase.create(
      "hop",
      "M0,0 C0.053, 0.604 0.157, 0.72 0.293, 0.837, 0.435, 0.959 0.633, 1 1,1"
    );
  }, []);

  const setInitialLinearLayout = () => {
    const animateCounter = () => {
      const counterElement = document.querySelector(".loader p");
      let currentValue = 0;
      const updateInterval = 300;
      const maxDuration = 2000;
      const endValue = 100;
      const startTime = Date.now();
      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < maxDuration) {
          currentValue = Math.min(
            currentValue + Math.floor(Math.random() * 30) + 5,
            endValue
          )
          counterElement.textContent = currentValue;
          setTimeout(updateCounter, updateInterval);
        } else {
          counterElement.textContent = endValue;
          setTimeout(() => {
            gsap.to(counterElement, {
              y: -20,
              duration: 1,
              ease: "power3.inOut",
              onComplete: () => {
                animateToCircularLayout();
                  gsap.to(".nav-item p", {
                    y: 0,
                    duration: 1,
                    ease: "power3.inOut",
                    stagger: 0.075
                  })
              }
              }
            )
          }, 100)
        }
      }
      updateCounter()
    }

    const container = document.querySelector(".container")
    const items = document.querySelectorAll(".item")
    const totalItemsWidth =  items[0].offsetWidth + (items.length - 1) * 10
    const startX = (container.offsetWidth - totalItemsWidth) / 2

    items.forEach((item, index) => {
      gsap.set(item, {
        left: `${startX + index * 10}px`,
        top: "150%",
        rotation: 0,
      })
    })

    gsap.to(items, {
      top: "50%",
      transform: "translateY(-50%)",
      duration: 1,
      ease: "hop",
      stagger: 0.03
    })

    gsap.to(".loader p", {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1,
      onComplete: animateCounter,
    })

      const setCircularLayout = () => {
      const items = document.querySelectorAll(".item");
      const angleIncrement = (2 * Math.PI) / itemsCount; // total 360 degree divide each items
      const radius = 200;
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;

      items.forEach((item, index) => {
        const angle = index * angleIncrement; // multipite every item
        const x = centerX + radius * Math.cos(angle) - item.offsetWidth / 2; //caculate the position
        const y = centerY + radius * Math.sin(angle) - item.offsetHeight / 2;

        gsap.set(item, {
          top: `${y}px`,
          left: `${x}px`,
          rotation: (angle * 180) / Math.PI - 90, //covert radian to degree then minus 90
          transform: "translateY(0%)",
        })
      })
    }

    const animateToCircularLayout = () => {
      const items = document.querySelectorAll(".item");
      const state = Flip.getState(items); //get the properties
      setCircularLayout()

      Flip.from(state, {
        duration: 2,
        ease: "hop",
        stagger: -0.03,
        // onEnter: (element) => gsap.to(element, {rotation: "+=360"}),
      })
    }
  }

  return (
    <div className="container">
      <nav>
        <div className="col">
          <div className="nav-items">
            <div className="nav-item"><p>wwan</p></div>
          </div>
          <div className="nav-items">
            <div className="nav-item"><p>Youtube</p></div>
          </div>
        </div>
        <div className="col">
          <div className="nav-items">
            <div className="nav-item"><p>Work</p></div>
          </div>
          <div className="nav-items">
            <div className="nav-item"><p>Studio</p></div>
          </div>
          <div className="nav-items">
            <div className="nav-item"><p>Contact</p></div>
          </div>
          <div className="nav-items">
            <div className="nav-item"><p>Twitter</p></div>
            <div className="nav-item"><p>Instagram</p></div>
          </div>
        </div>
      </nav>
      <div className="loader"><p>0</p></div>
      <div className="gallery">
        {
          [...Array(18)].map((_, i) => {
            return(
            <div key={i} className="item">
              <img src={`/${i}.jpg`} alt={`Image ${i}`} />
            </div>)
          })
        }
      </div>
    </div>
  );
}
