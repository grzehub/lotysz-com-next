import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { FC, Suspense, useMemo, useRef, VFC } from "react";
import {
  Canvas,
  useLoader,
  extend,
  useThree,
  useFrame,
  Object3DNode,
  Vector3,
  Color,
} from "@react-three/fiber";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

const url = `/images/M.svg`;

const GridHelper = () => {
  return <gridHelper args={[500, 500]} position={[0, 0, 0]} />;
};

const urlJpg = `https://media1.giphy.com/media/Mp4hQy51LjY6A/giphy.gif?cid=790b761137e09c8ea61a48f30d0effbf13f88fb452fe33e8&rid=giphy.gif&ct=g`;

let TextureLoader: typeof THREE.TextureLoader;

const PlaneJPG: VFC = () => {
  TextureLoader = require("three/src/loaders/TextureLoader").TextureLoader;
  const colorMap = useLoader(TextureLoader, urlJpg);
  const ref = useRef();

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[10, 10]} />
      <meshStandardMaterial map={colorMap} side={THREE.DoubleSide} />
    </mesh>
  );
};

const Camera: FC = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef<OrbitControls>(null);

  camera.position.set(0, 0, 10);
  camera.far = 10000;
  camera.near = 10000;
  // camera.fov = 45;

  useFrame(() => controls?.current?.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={true}
    />
  );
};

export default function App() {
  return (
    <Canvas
      camera={{ fov: 75, position: [0, 100, 100] }}
      style={{ height: "100vh" }}
    >
      <Camera />
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <PlaneJPG />
      </Suspense>
      <GridHelper />
    </Canvas>
  );
}
