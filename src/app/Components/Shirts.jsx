"use client"
import React, {useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Shirts = (props) => {
    const shirt1 = useGLTF('./adidas_jacket/scene.gltf')
  return (
    <>
    <mesh>
        <hemisphereLight intensity={0.15} groundColor={'white'} />
        <primitive object={shirt1.scene} />
    </mesh>
    
    </>
  )
}
const ShirtsCanvas = ()=>{
    return(
    <>
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20,4,5], fov:25}}
    gl={{preserveDrawingBuffer: true}}

    >

        <Suspense fallback={null}>
            <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
            />
                <Shirts/>
                <Preload all/>
        </Suspense>
    </Canvas>
    
    </>
    
    )
}

export default ShirtsCanvas