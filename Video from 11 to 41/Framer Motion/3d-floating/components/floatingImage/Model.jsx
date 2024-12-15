"use client";
import React from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Model({ mouse }) {
  const { nodes } = useGLTF("/medias/floating_shapes4.glb");
  return (
    <Float
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <group>
        <Mesh node={nodes.Sphere001} mouse={mouse} multiplayer={2.4} />
        <Mesh node={nodes.Sphere002} mouse={mouse} multiplayer={2.4} />
        <Mesh node={nodes.Cylinder002} mouse={mouse} multiplayer={1.2} />
        <Mesh node={nodes.Sphere003} mouse={mouse} multiplayer={1} />
        <Mesh node={nodes.Cylinder003} mouse={mouse} multiplayer={1.8} />
        <Mesh node={nodes.Cylinder009} mouse={mouse} multiplayer={1.8} />
        <Mesh node={nodes.Cylinder005} mouse={mouse} multiplayer={2} />
        <Mesh node={nodes.Cube002} mouse={mouse} multiplayer={1.2} />
        <Mesh node={nodes.Cylinder006} mouse={mouse} multiplayer={1.6} />
        <Mesh node={nodes.Cylinder007} mouse={mouse} multiplayer={1.8} />
        <Mesh node={nodes.Sphere} mouse={mouse} multiplayer={1.5} />
      </group>
    </Float>
  );
}

function Mesh({ node, mouse, multiplayer }) {
  const { geometry, material, position, scale, rotation } = node;
  const a = multiplayer / 2;
  const rotationX = useTransform(
    mouse.x,
    [0, 1],
    [rotation.x - a, rotation.x + a]
  );
  const rotationY = useTransform(
    mouse.y,
    [0, 1],
    [rotation.y - a, rotation.y + a]
  );
  const positionX = useTransform(
    mouse.x,
    [0, 1],
    [position.x - multiplayer * 2, position.x + multiplayer * 2]
  );
  const positionY = useTransform(
    mouse.y,
    [0, 1],
    [position.y + multiplayer * 2, position.y - multiplayer * 2]
  );
  return (
    <motion.mesh
      castShadow={true}
      receiveShadow={true}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
      rotation-y={rotationX}
      rotation-x={rotationY}
      position-x={positionX}
      position-y={positionY}
    />
  );
}

useGLTF.preload("/medias/floating_shapes_4.glb");
