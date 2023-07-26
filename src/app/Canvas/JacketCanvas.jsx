'use client'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import AdidasJacket from '../3Dmodels/AdidasJacket'
import HilfingerJacket from '../3Dmodels/HilfingerJacket'
import VarsityJacket from '../3Dmodels/VarsityJacket'
const JacketCanvas = () => {
  return (
    <>
    <Canvas>
        <Stage environment='city' intensity={0.6}>
        <AdidasJacket/>
        <HilfingerJacket/>
        {/* <VarsityJacket/> */}
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
    </>
  )
}

export default JacketCanvas