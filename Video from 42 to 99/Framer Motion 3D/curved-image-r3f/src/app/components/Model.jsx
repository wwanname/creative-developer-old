/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useRef } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { useAspect, useTexture } from "@react-three/drei";
import useMouse from "./useMouse.js";
import useDimension from "./useDimension.js";
import { projects } from "./data.js";
import { fragment, vertex } from "./shader.js";

export default function Model({ activeMenu }) {
  //import
  const mesh = useRef()
  const mouse = useMouse()
  const { viewport } = useThree()
  const dimension = useDimension() //have to use window.inner indirectly
  const textures = useTexture(projects.map((project) => project.src))
  const opacity = useMotionValue(0)
  const scale = useAspect(textures[0].image.width, textures[0].image.height, 0.3)

  //uniform
  const uniforms = useRef({
    uTexture: { value: textures[0] },
    uOffset: {value: {x: 0, y: 0}},
    uOpacity: {value: 0}
  });

  //animation
  const lerp = (x, y, a) => x * (1 - a) + y * a
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  useEffect(() => {
    if(activeMenu != null) {
      animate(opacity, 1, {duration: 0.2, onUpdate: progress => mesh.current.material.uniforms.uOpacity.value = progress})
    } else {
      animate(opacity, 0, {duration: 0.2, onUpdate: progress => mesh.current.material.uniforms.uOpacity.value = progress})
    }
  }, [activeMenu])

  useFrame(() => {
    const smoothX = smoothMouse.x.get()
    const smoothY = smoothMouse.y.get()
    smoothMouse.x.set(lerp(smoothX, mouse.x.get(), 0.15))
    smoothMouse.y.set(lerp(smoothY, mouse.y.get(), 0.15))
    mesh.current.material.uniforms.uOffset.value = {
      x: -1 * (smoothX - mouse.x.get()),
      y: smoothY - mouse.y.get()
    }
    mesh.current.material.uniforms.uTexture.value = textures[activeMenu];
  });

  const x = useTransform(smoothMouse.x, [0, dimension.width], [(-1 * viewport.width) / 2, viewport.width / 2])
  const y = useTransform(smoothMouse.y, [0, dimension.height], [viewport.height / 2, (-1 * viewport.height) / 2]
  );

  //main
  return (
    <motion.mesh ref={mesh} position-x={x} position-y={y} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
        transparent={true}
      />
    </motion.mesh>
  );
}
