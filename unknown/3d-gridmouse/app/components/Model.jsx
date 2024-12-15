'use client'
import { useFrame, useThree } from "@react-three/fiber"
import { useTexture, useAspect } from "@react-three/drei"
import { vertex, fragment } from "./shader"
import { useRef } from "react"
import useMouse from "./useMouse"
import useDimension from "./MouseDirr/useDimension"
import { useMotionValue, useTransform } from "framer-motion"
import { motion } from "framer-motion"

export default function Model() {
    const mesh = useRef()
    const mouse = useMouse()
    const dimension = useDimension()
    const textures = useTexture("/images/maxresdefault.jpg")
    const {width, height} = textures.image
    const {viewport} = useThree()
    const scale  = useAspect(width, height, 0.5)
    const uniforms = useRef({
        uOffset: {value: {x: 0, y: 0}},
        uTexture: {value: textures},
        uTime: { value: 0 },
    })

    const lerp = (x, y, a) => x * (1 - a) + y * a
    const smoothMouse = {
      x: useMotionValue(0),
      y: useMotionValue(0),
    }
    useFrame(() => {
        mesh.current.material.uniforms.uTime.value += 0.04
        const mouseX = smoothMouse.x.get()
        const mouseY = smoothMouse.y.get()
        smoothMouse.x.set(lerp(mouseX, mouse.x.get(), 0.15))
        smoothMouse.y.set(lerp(mouseY, mouse.y.get(), 0.15))
        mesh.current.material.uniforms.uOffset.value = {
            x: mouseY - mouse.y.get(),
            y: -1 * (mouseX - mouse.x.get())
        }
    })

    const x = useTransform(smoothMouse.x, [0, dimension.width], [-(viewport.width / 2), viewport.width / 2])
    const y = useTransform(smoothMouse.y, [0, dimension.height], [viewport.height / 2, -(viewport.height / 2)])

    return (
        // <motion.mesh ref={mesh} scale={scale}>
         <motion.mesh ref={mesh} scale={scale} position-x={x} position-y={y}>
            <planeGeometry args={[1, 1, 20, 20]} />
            <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
        </motion.mesh>
    )
  }
