"use client"
import React, {useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
    const starRef = useRef()
    const sphere = random.inSphere(new Float32Array(3000), {radius: 1.2})
    useFrame((state, delta)=>{
        starRef.current.rotation.x -= delta/10 
        starRef.current.rotation.y -= delta/15 

    })
  return (
    <group rotation={[0,0,Math.PI/1]}>
        <Points ref={starRef} positions={sphere} stride={3} frustumCulled {...props} limit={20}>
            <PointMaterial
            transparent
            // color="#f27c8"
            color="white"
            size={0.002}
            sizeAttenuation= {true}
            depthWrite = {false}
            />
            
            </Points>
    </group>
  )
}

const StarCanvas = () => {
    return (
      <div className='w-full  h-auto inset-0 absolute z-[-1]'>
          <Canvas camera={{position:[0,0,1]}}>
            <Suspense fallback={null}>
                <Stars/>
                <Preload all/>

            </Suspense>
          </Canvas>
      </div>
    )
  }
export default StarCanvas