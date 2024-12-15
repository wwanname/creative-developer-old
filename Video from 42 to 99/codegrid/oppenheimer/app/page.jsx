'use client'
import { OrthographicCamera } from "@react-three/drei";
import Model from "./components/Model"
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <nav>
        <a href="#">Openheimer</a>
        <p>/Experiments</p>
      </nav>
      <footer>
        <p>nani</p>
        <p>RIP</p>
      </footer>
      <Canvas gl={{ antialias: true, pixelRatio: 2 }} >
        <OrthographicCamera position={[-1, 1, 1]} />
        <Model />
      </Canvas>
    </>
    );
}
