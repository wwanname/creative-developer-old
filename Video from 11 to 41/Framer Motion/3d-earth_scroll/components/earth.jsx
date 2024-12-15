/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from "framer-motion-3d"
import { useScroll, useSpring } from "framer-motion"
import { useRef } from 'react';

function Earth({scrollYProgress}) {

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/color.jpg',
        '/assets/normal.png',
        '/assets/occlusion.jpg'
    ])

    const smoothRotation = useSpring(scrollYProgress, {
        damping: 20
    });

    const earth = useRef(null);
    useFrame(() => {})

    return (
        <motion.mesh ref={earth} scale={2.5} rotation-y={smoothRotation}>
            <sphereGeometry args={[1, 64, 64]}/>
            <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
        </motion.mesh>
    )
}

export default function App() {
    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    return (
        <Canvas ref={scene}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, -.25]} />
            <Earth scrollYProgress={scrollYProgress} />
        </Canvas>
    )
}