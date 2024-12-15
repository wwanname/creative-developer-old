'use client'
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";

export default function Home() {
  const video = useRef()
  const timeline = useRef()
  const marker = useRef()
  const cursor = useRef()
  const cursorText = useRef()
  const [isPlaying, setIsPlaying] = useState(true)
  useEffect(() => {
    const currentVideo = video.current // because the warning of React rules, I must change the value to currentVideo to hold the video.current value correctly
                      // currenttime              / totaltime             * percent
    const onRunning = () => {
      const percentage = currentVideo.currentTime / currentVideo.duration * 100
      marker.current.style.left = `calc(${percentage}% - 1px)`
    }

    const onSkip = (e) => {
      e.stopPropagation()
      const rect = timeline.current.getBoundingClientRect()

      //    pos.Marker    = pos.mouse - Timeline.left
      const clickPosition = e.clientX - rect.left

      //    0.0 -> 1.0 = pos.Marker    / totalTimeline
      const percentage = clickPosition / rect.width

      //example:   result      = 0.2        * 80000 = 4000 (milisecond) ----> 4 second
      //                       = 0.4        * 80000 = 32000 (milisecond) ----> 32 second
      //                       = 0.8        * 80000 = 64000 (milisecond) ----> 64 second
      //                       = 1.0        * 80000 = 80000 (milisecond) ----> 80 second
      currentVideo.currentTime = percentage * currentVideo.duration
      marker.current.style.left = `calc(${percentage * 100}% - 1px)`
    }
  currentVideo.addEventListener("timeupdate", onRunning)
  timeline.current.addEventListener("click", onSkip)



    document.addEventListener("click", function (e) {
      if (!timeline.current.contains(e.target)) {
        if (isPlaying) {
          currentVideo.pause()
          cursorText.current.textContent = "Play"
        } else {
          currentVideo.play()
          cursorText.current.textContent = "Pause"
        }
        setIsPlaying(!isPlaying)
      }
    })

const onMouseMove = (e) => cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
document.addEventListener("mousemove", onMouseMove)
return () => (currentVideo.removeEventListener("timeupdate", onRunning), document.addEventListener("mousemove", onMouseMove))
  }, [isPlaying])

  return (
    <>
    <div className="overlay">
      <div className="video-container">
        <video ref={video} autoPlay muted loop id="mainVideo">
          <source src="./video.mp4" type="video/mp4" />
        </video>
      </div>
      <div ref={cursor} className="cursor"><p ref={cursorText}>Pause</p></div>
      <div ref={timeline} className="video-timeline"> <div ref={marker} className="video-marker"></div>
          <div className="video-timestamps">
          {[...Array(13)].map((_, i) => { const seconds = i * 5

                //minutes = Covert number to string
                //        = decimal number must be integer  .add zero (0) behind number
            const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')

                //seconds = Covert number to string
                //        = 70 % 60 = 10, if seconds go over 60, it will be 10, make sure it doesn't larger 60
            const displaySeconds = String(seconds % 60).padStart(2, '0')
            return <p key={i}>{`${minutes}:${displaySeconds}`}</p>
          })} </div>
          <div className="video-frames"> {[...Array(9)].map((_, i) => { return (
            <div key={i} className="frame"><Image priority width={500} height={200} src={`/snapshot/0000${i}.png`} alt={`${i}`} /></div> )
          })} </div>
        </div>
    </div>
    </>
  );
}
