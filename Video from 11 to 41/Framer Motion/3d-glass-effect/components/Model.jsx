import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import {
  thickness,
  roughness,
  transmission,
  ior,
  chromaticAberration,
} from "three/src/nodes/core/PropertyNode.js";

export default function Model() {
  const mesh = useRef();
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.rotation.x += 0.02;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 3.5}>
      <Text fontSize={0.45} position={[0, 0, -0.5]}>
        hello world!!
      </Text>
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
