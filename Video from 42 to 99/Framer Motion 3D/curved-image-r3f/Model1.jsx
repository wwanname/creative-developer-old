/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion-3d";
import { useMotionValue, useTransform } from "framer-motion";
import { useFrame, useThree } from "@react-three/fiber";
import { fragment, vertex } from "./src/app/components/shader.js";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Model() {
  //tạo chuột di chuyển
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const resize = () => {
    const { innerWidth, innerHeight } = window; //chuyển đổi window sang giá trị khác (dimension)
    setDimension({
      width: innerWidth,
      height: innerHeight,
    }); //create hook if you aren't server side
  };
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  const { viewport } = useThree(); //viewport của hình ảnh 3d, chỉ số width và height
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  useFrame(() => {
    const { x, y } = mouse;
    const smoothX = smoothMouse.x.get();
    const smoothY = smoothMouse.y.get();
    smoothMouse.x.set(lerp(smoothX, x.get(), 0.1)); //xen giá trị vào để mượt
    smoothMouse.y.set(lerp(smoothY, y.get(), 0.1)); //xen giá trị vào để mượt
    mesh.current.material.uniforms.uDelta.value = {
      x: x.get() - smoothX,
      y: y.get() - smoothY,
    };
  });

  const x = useTransform(
    smoothMouse.x,
    [0, dimension.width], // convert pixel
    [(-1 * viewport.width) / 2, viewport.width / 2] // to coordinate system cartensian, nhân -1 cho cả 2 range bằng nhau, chia 2 để giảm tốc độ
  );
  const y = useTransform(
    smoothMouse.y,
    [0, dimension.height], // convert pixel
    [viewport.height / 2, (-1 * viewport.height) / 2] // to coordinate system cartensian, nhân -1 cho cả 2 range bằng nhau, chia 2 để giảm tốc độ
  );

  const mesh = useRef();
  const texture = useTexture("/images/1.jpg");
  const uniforms = useRef({
    uTexture: { value: texture },
    uDelta: { value: { x: 0, y: 0 } },
  });

  return (
    <motion.mesh ref={mesh} position-x={x} position-y={y}>
      <planeGeometry args={[2, 3, 15, 15]} />
      {/* <meshBasicMaterial wireframe={true} color="red" /> */}
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
      />
    </motion.mesh>
  );
}
