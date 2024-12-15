import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Tree } from "../Shader/Tree";
import { Color } from "three";

function Box(props) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      castShadow
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export const Scene = () => {
  const refTrees = useRef(null);

  useFrame(() => {
    const { current: group } = refTrees;
    if (group) {
      group.rotation.x = group.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        intensity={4}
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Tree
        ref={refTrees}
        position={[0, 0, -4]}
        colors={[
          new Color("#427062").convertLinearToSRGB(),
          new Color("#33593e").convertLinearToSRGB(),
          new Color("#234549").convertLinearToSRGB(),
          new Color("#1e363f").convertLinearToSRGB(),
        ]}
      />
      <Tree
        ref={refTrees}
        position={[0, 0, 4]}
        colors={[
          new Color("#4a8d7e").convertLinearToSRGB(),
          new Color("#377f6a").convertLinearToSRGB(),
          new Color("#184f52").convertLinearToSRGB(),
          new Color("#143b36").convertLinearToSRGB(),
        ]}
      />
    </>
  );
};
