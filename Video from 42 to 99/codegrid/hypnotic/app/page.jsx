'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";
import { videos } from "./video";
import ReactPlayer from "react-player";

const rows = [
  { id: 1, count: 2 },
  { id: 2, count: 3 },
  { id: 3, count: 4 },
];

export default function Home() {
  const galleryRef = useRef(null);

  const newItems = rows.map((row) =>
    [...Array(row.count)].map((_, index) => {
      const itemId = `${row.id}-${index}`;
      return {
        id: itemId,
        video: videos.find((v) => v.id == itemId)
      };
    })
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (galleryRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = galleryRef.current.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height / 2;

        const sensitivity = 2;
        const deltaX = (centerX - clientX) / sensitivity;
        const deltaY = (centerY - clientY) / sensitivity;

        galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
      }
    };

    const container = document.querySelector(".container");
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [galleryRef]);

  return (
    <div className="container">
      <div className="gallery" ref={galleryRef}>
        {newItems.map((row, index) => (
          <div key={index} className="row">
            {row.map(({ id, video }) => (
              video ? (
                <div key={id} className="item">
                  <div className="preview-img">
                    <img alt={video.videoName} src={video.previewImg} />
                  </div>
                  <p id="videoName">{video.videoName}</p>
                  <div className="videoWrapper">
                    <ReactPlayer
                      url={`https://vimeo.com/${video.videoId}`}
                      controls={false}
                      playing
                      muted
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              ) : null
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
