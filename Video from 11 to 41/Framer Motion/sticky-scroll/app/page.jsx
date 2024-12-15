"use client";
import styles from "./page.module.scss";
import Header from "./components/Header";
import Cursor from "./components/stickyCursor";
import { useRef } from "react";

export default function Home() {
  const stickyElement = useRef(null);

  return (
    <main className={styles.main}>
      <Header ref={stickyElement} />
      <Cursor stickyElement={stickyElement} />
    </main>
  );
}
