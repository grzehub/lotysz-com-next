// import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { VFC, Suspense, useRef } from "react";

const url = `http://localhost:3000/images/brachiosaurus4.png`;

let TextureLoader: typeof THREE.TextureLoader;

const PlaneJPG: VFC = () => {
  TextureLoader = require("three/src/loaders/TextureLoader").TextureLoader;
  const colorMap = useLoader(TextureLoader, url);
  const ref = useRef();

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[10, 10]} />
      <meshStandardMaterial color='#ff0000' map={colorMap} />
    </mesh>
  );
};

const PlaneJPGScene: VFC = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <PlaneJPG />
      </Suspense>
    </Canvas>
  );
};

export default PlaneJPGScene;
