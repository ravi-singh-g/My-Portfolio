import { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, Stars } from '@react-three/drei'
import * as THREE from 'three'

function useIsDesktop() {
  const [desktop, setDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 900px)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const fn = () => setDesktop(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])
  return desktop
}

function HoloAvatar() {
  const group = useRef()
  const wire = useRef()
  const core = useRef()
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()
  const desktop = useIsDesktop()

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      const { x, y } = state.pointer
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.55, 0.05)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.35, 0.05)
      const targetX = desktop ? 1.9 : 0
      const targetY = desktop ? 0 : 1.7
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.04)
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.04)
      const s = desktop ? 1 : 0.72
      group.current.scale.setScalar(THREE.MathUtils.lerp(group.current.scale.x, s, 0.04))
    }
    if (wire.current) {
      wire.current.rotation.y += delta * 0.25
      wire.current.rotation.x += delta * 0.08
    }
    if (core.current) {
      core.current.rotation.y -= delta * 0.4
      core.current.rotation.z += delta * 0.15
      core.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05)
    }
    if (ring1.current) ring1.current.rotation.z += delta * 0.6
    if (ring2.current) ring2.current.rotation.z -= delta * 0.4
    if (ring3.current) ring3.current.rotation.z += delta * 0.28
  })

  return (
    <group ref={group} position={desktop ? [1.9, 0, 0] : [0, 1.7, 0]}>
      <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.9}>
        {/* outer wireframe shell */}
        <mesh ref={wire}>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.5} />
        </mesh>
        {/* glowing core */}
        <mesh ref={core}>
          <icosahedronGeometry args={[0.85, 2]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.75}
            roughness={0.25}
            metalness={0.7}
          />
        </mesh>
        {/* orbit rings */}
        <mesh ref={ring1} rotation={[Math.PI / 2.2, 0, 0]}>
          <torusGeometry args={[2.15, 0.012, 8, 120]} />
          <meshBasicMaterial color="#00e5ff" transparent opacity={0.85} />
        </mesh>
        <mesh ref={ring2} rotation={[Math.PI / 1.8, 0.6, 0]}>
          <torusGeometry args={[2.55, 0.01, 8, 120]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.75} />
        </mesh>
        <mesh ref={ring3} rotation={[Math.PI / 2.6, -0.5, 0.4]}>
          <torusGeometry args={[2.95, 0.008, 8, 120]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
        </mesh>
        <Sparkles count={110} scale={7.5} size={2.2} speed={0.35} opacity={0.7} color="#67e8f9" />
      </Float>
      <pointLight color="#00e5ff" intensity={30} distance={14} position={[3, 2, 3]} />
      <pointLight color="#a855f7" intensity={26} distance={14} position={[-3, -2, -2]} />
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <fog attach="fog" args={['#05060f', 9, 24]} />
      <ambientLight intensity={0.5} />
      <Stars radius={70} depth={40} count={2600} factor={3.2} saturation={0} fade speed={0.5} />
      <gridHelper args={[60, 60, '#0d2033', '#071120']} position={[0, -3.4, -2]} />
      <HoloAvatar />
    </Canvas>
  )
}
