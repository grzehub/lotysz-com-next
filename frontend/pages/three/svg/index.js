import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { Suspense, useMemo, useRef } from "react";
import {
  Canvas,
  useLoader,
  extend,
  useThree,
  useFrame,
} from "@react-three/fiber";

extend({ OrbitControls });

const url = `http://localhost:3000/images/DoFA_22.svg`;

function Shape({ shape, position, color }) {
  if (!position) return null;
  return (
    <mesh>
      <meshNormalMaterial
        color={color}
        side={THREE.DoubleSide}
        depthWrite={true}
        transparent
      />
      <extrudeBufferGeometry
        args={[shape, { bevelEnabled: false, depth: 300 }]}
      />
    </mesh>
  );
}

function Scene() {
  const data = useLoader(SVGLoader, url);
  const shapes = useMemo(
    () =>
      data.paths.flatMap((g, index) =>
        g.toShapes(true).map((shape) => ({ shape, color: g.color, index }))
      ),
    [data]
  );

  return (
    <>
      <group position={[-500, -500, 1000]} scale={[1, 1, 1]}>
        {shapes.map((item) => (
          <Shape key={item.shape.uuid} position={[0, 0, 0]} {...item} />
        ))}
      </group>
    </>
  );
}

const Camera = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  camera.position.z = 2000;
  camera.far = -10000;
  camera.near = -10000;
  camera.fov = 190;

  useFrame(() => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={false}
      enableZoom={true}
    />
  );
};

export default function App() {
  return (
    <Canvas
      // flat
      // linear

      // camera={{ fov: 75, position: [0, 0, 2000] }}
      style={{ height: "100vh" }}
    >
      <Camera />
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
