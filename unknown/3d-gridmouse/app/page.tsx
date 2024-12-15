'use client'
import { Canvas } from "@react-three/fiber";
import Model from "./components/Model"
import Mouse from "./components/MouseDirr/mousedirr"

export default function Home() {
  return (
    <div className="w-full fixed h-screen">
      <Canvas>
        <Model />
      </Canvas>
    </div>
    //<div className="w-full h-screen fixed">
    //    <Mouse />
    //  </div>
  );
}
