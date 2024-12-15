'use client'
import { useRef } from 'react';
import styles from './Home.module.css'

export default function Home() {
  const container = useRef(null);
  const img = useRef(null);

  const manageMouseMove = (e) => {
    if (container.current && img.current) {
      const { clientX, clientY } = e;
      const containerPosition = container.current.getBoundingClientRect();
      const x = clientX - containerPosition.left;
      const y = clientY - containerPosition.top;
      img.current.style.top = `${y}px`;
      img.current.style.left = `${x}px`;
      draw(x, y);
    }
  }

  const draw = (x, y) => {
    if (container.current) {
      const div = document.createElement("div");
      div.classList.add(styles.circle); // Access class name directly
      div.style.top = `${y}px`;
      div.style.left = `${x}px`;
      container.current.appendChild(div);
    }
  }

  return (
    <div className={styles.main}>
        <div ref={container} onMouseMove={manageMouseMove} className={styles.container}>
          <img ref={img} className={styles.img} src="/smiley.svg" alt="Smiley" />
        </div>
    </div>
  );
}
