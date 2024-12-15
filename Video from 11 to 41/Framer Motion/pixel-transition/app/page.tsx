"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import PixelBackground from "../components/pixelBackground/centered";
import HorizontalPixelBackground from "../components/pixelBackground/horizontal/";
import VerticalPixelBackground from "../components/pixelBackground/vertical/";
import Test from "../components/test/index"

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <main className={styles.main}>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <Menu menuIsActive={menuIsActive} />
      {/* <PixelBackground menuIsActive={menuIsActive} /> */}
      {/* <HorizontalPixelBackground menuIsActive={menuIsActive} /> */}
      {/* <VerticalPixelBackground menuIsActive={menuIsActive} /> */}
      <Test menuIsActive={menuIsActive} />
    </main>
  );
}
