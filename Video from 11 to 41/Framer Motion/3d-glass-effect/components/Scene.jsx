"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function Index() {
  return (
    <Canvas style={{ background: "#000000" }}>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
}
