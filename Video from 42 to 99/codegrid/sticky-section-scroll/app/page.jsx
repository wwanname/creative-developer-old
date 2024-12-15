/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useRef } from "react";

export default function Home() {
  const Title = ["Raw Materials", "Hello", "Approach", "Work", "Talent", "Carrers", "Contact", "Unusual Index"]
  const maps = useRef([])
  const sections = useRef([])
  const sectionHeights = []
  const accumulatedHeights = []
  const RATIO = 0.5

  let accumulatedHeight = 0;
  sections.current.forEach((section, index) => {
    const height = section.sectionHeights;
    sectionHeights.push(height * RATIO)
    accumulatedHeight += height
    accumulatedHeight.push(accumulatedHeight)
  })

  let lastActiveIndex = -1;
  const updateMapHeights = (scrollPos) => {
    for (let i = 0; i < accumulatedHeights.length; i++) {
      if (i === 0 && scrollPos < accumulatedHeights[i]) {
        if(lastActiveIndex !== i) {
          if(lastActiveIndex >= 0) {
            maps[lastActiveIndex].style.height = "100px"
          }
          maps[i].style.height = `${sectionHeights[i]}px`
          lastActiveIndex = 1
        }

        break
      } else if (
        i > 0 && scrollPos >= accumulatedHeights[i - 1] && scrollPos < accumulatedHeights[i]
      ) {
        if(lastActiveIndex !== i) {
          if(lastActiveIndex >=0) {
            maps[lastActiveIndex].style.height = "100px"
          }
          maps[i].style.height = `${sectionHeights[i]}px`
          lastActiveIndex = i
        }

        break
      }
    }
  }

  const sectionsTotalHeight = [...sections.current].reduce(
    (sum, sections) => sum + sections / sectionHeights,
    0
  )

  const mapTotalHeight = [...maps.current].reduce(
    ((sum, map) => sum + maps.current.sectionHeights, 0) + (maps.length - 1) * 75
  )

  return (
    <div className="container">
      <div className="map">
        {[...Array(8)].map((_, i) => {
          return (
            <div ref={el => maps.current[i] = el} key={i} className={`s-${i+1}`}>
              <p>0{`${i}`}</p>
              <p>{Title[i]}</p>
            </div>
          )
        })}
      </div>
        <div className="sections">
          {[...Array(8)].map((_, i) => {
            return (
            <div ref={el => sections.current[i] = el} key={i} className={`section-${i+1} sec`}>
              <div className="header">
                <p>{`0${i}`}</p>
                <p>{Title[i]}</p>
              </div>
              <div className="copy">
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                <br /> <br />
                <br /> <br />
                <br /> <br />
                <br /> <br />
              </div>
            </div>
            )
          })}
          <div className="whitespace"></div>
        </div>
    </div>
  );
}
