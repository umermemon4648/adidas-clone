'use client'
import React from 'react'
// import {} from '@react-three/drei'

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
// import { proxy, useSnapshot } from 'valtio'

const damp = THREE.MathUtils.damp
const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0.5, 0)])

const Hero = () => {
  return (
    <>
    {/* <Canvas>
<mesh>
    <boxGeometry args={[5,5,5]}/>
    <meshBasicMaterial color={'red'}/>
</mesh>
    </Canvas> */}
<Canvas>
{/* <line key={i} geometry={geometry} material={material} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]} /> */}
<line geometry={geometry} material={material} position={[1 * 6, 6, 10]} />
</Canvas>
    </>
  )
}

export default Hero