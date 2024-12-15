/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef } from "react";
import { useControls } from "leva";
import { vertex, fragment } from "./shader";
import { useFrame, useThree } from "@react-three/fiber";
import { useAspect, useTexture } from "@react-three/drei";
import { transform } from "framer-motion";
import * as THREE from "three";

export default function Model({ scrollProgress }) {
  //import
  const plane = useRef();
  const texture = useTexture("/car.jpg");
  const { width, height } = texture.image;
  const { viewport } = useThree();
  const scale = useAspect(width, height, 0.3); //to scale down

  //uniforms
  const uniforms = useRef({
    uWaveLength: { value: 5 },
    vUvScale: { value: new THREE.Vector2(0, 0) },
    uTexture: { value: texture },
    uTime: { value: 0 },
    uAmplitude: { value: 0.25 },
  });

  //animation
  useFrame(() => {
    const scaleX = transform(scrollProgress.get(), [0, 1], [scale[0], viewport.width]);
    const scaleY = transform(scrollProgress.get(), [0, 1], [scale[1], viewport.height]);
    plane.current.scale.x = scaleX;
    plane.current.scale.y = scaleY;

    const imageRatio = width / height;
    const aspectRatio = scaleX / scaleY;
    plane.current.material.uniforms.vUvScale.value.set(1, imageRatio / aspectRatio);

    plane.current.material.uniforms.uTime.value += 0.04;
    const modifiedAmplitude = transform(scrollProgress.get(), [0, 1],[0.25, 0]); //add get() because identify scrollYProgress is MotionValue
    plane.current.material.uniforms.uAmplitude.value = modifiedAmplitude;
  });

  return (
    <mesh ref={plane} scale={scale}>
      <planeGeometry args={[1, 1, 45, 45]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
