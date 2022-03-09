import { Sky } from "@react-three/drei";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { DotScreen, EffectComposer } from "@react-three/postprocessing";
import { addHours, differenceInSeconds, format } from "date-fns";
import { BlendFunction } from "postprocessing";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Text } from "troika-three-text";

extend({ OrbitControls });
extend({ Text });

// This component was auto-generated from GLTF by: https://github.com/react-spring/gltfjsx
function Bird({ speed, factor, url, ...props }) {
  const { nodes, materials, animations } = useLoader(GLTFLoader, url);
  const group = useRef();
  const mesh = useRef();
  const [start] = useState(() => Math.random() * 5000);
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useEffect(
    () => void mixer.clipAction(animations[0], group.current).play(),
    []
  );
  useFrame((state, delta) => {
    mesh.current.position.y = Math.sin(start + state.clock.elapsedTime) * 5;
    mesh.current.rotation.x =
      Math.PI / 2 + (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 10;
    mesh.current.rotation.y =
      (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 2;
    group.current.rotation.y +=
      Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
    mixer.update(delta * speed);
  });
  return (
    <group ref={group} dispose={null}>
      <scene name='Scene' {...props}>
        <mesh
          ref={mesh}
          scale={1.5}
          name='Object_0'
          morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
          rotation={[Math.PI / 2, 0, 0]}
          geometry={nodes.Object_0.geometry}
          material={materials.Material_0_COLOR_0}
        />
      </scene>
    </group>
  );
}

function Birds() {
  return new Array(40).fill().map((_, i) => {
    const x = (20 + Math.random() * 80) * (Math.round(Math.random()) ? -1 : 1);
    const y = -10 + Math.random() * 20;
    const z = -5 + Math.random() * 10;
    const bird = "Flamingo";
    let speed = 0.1;
    let factor = 0.25;

    return (
      <Bird
        key={i}
        position={[x, y, z]}
        rotation={[0, x > 0 ? Math.PI : 0, 0]}
        speed={speed}
        factor={factor}
        url={`/images/${bird}.glb`}
      />
    );
  });
}

const Camera = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  camera.position.set(0, 5, 15);
  camera.far = 10000;
  camera.near = 10000;

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

const Localization = () => {
  const [hovered, hover] = useState(false);

  const handleClick = () =>
    window.open(
      "https://www.google.pl/maps/@51.1126124,17.1052043,122m/data=!3m1!1e3",
      "_blank"
    );
  const bDaylocalisation = "Lokalizacja";
  const ref = useRef();

  return (
    <>
      <text
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        onClick={handleClick}
        position-z={10}
        position-y={0}
        // rotation={}
        text={bDaylocalisation}
        font='/fonts/FavoritTrial-BoldXp.otf'
        anchorX='center'
        anchorY='middle'
        fontSize={0.5}
        color={hovered ? "white" : "black"}
        style={{ cursor: "pointer" }}
      >
        <meshPhongMaterial attach='material' side={THREE.DoubleSide} />
      </text>
      <>
        <mesh
          onClick={handleClick}
          ref={ref}
          position={[0, 0, 9]}
          scale={hovered ? 1.2 : 1}
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
        >
          <boxGeometry args={[5, 2, 0.2]} />
          <meshStandardMaterial color={hovered ? "black" : "white"} />
        </mesh>
      </>
    </>
  );
};

const CounterBDay = () => {
  const today = new Date();
  const [text, setText] = useState(today);

  const bDayDateCount = new Date(2022, 3, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      const newText = new Date();
      setText(newText);
    }, 1000);
    return () => clearInterval(interval);
  });

  const toBDaysCount = differenceInSeconds(addHours(bDayDateCount, 15), text);

  return (
    <text
      position-z={-25}
      position-y={10}
      text={toBDaysCount}
      font='/fonts/FavoritTrial-BoldXp.otf'
      anchorX='center'
      anchorY='middle'
      fontSize={6}
      color='black'
    >
      <meshPhongMaterial attach='material' side={THREE.DoubleSide} />
    </text>
  );
};

export default function App() {
  const bDayTitle = "40-cha Lotka i zalegle Kachy";
  const bDayDate = format(new Date(2022, 3, 3), "dd/MM/yyyy");

  return (
    <Canvas
      style={{ height: "100vh", cursor: "grab" }}
      gl={{
        powerPreference: "high-performance",
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false,
      }}
    >
      <Camera />
      {/* <color attach='background' args={["#AAA"]} /> */}
      <ambientLight intensity={1} />
      <Sky />
      <Suspense fallback={null}>
        <Birds />
        <text
          position-z={5}
          position-y={3}
          text={bDayTitle}
          font='/fonts/FavoritTrial-BoldXp.otf'
          anchorX='center'
          anchorY='middle'
          fontSize={1}
          color='black'
        >
          <meshPhongMaterial attach='material' side={THREE.DoubleSide} />
        </text>
        <Localization />
        <text
          position-z={5}
          position-y={2}
          text={bDayDate}
          font='/fonts/FavoritTrial-BoldXp.otf'
          anchorX='center'
          anchorY='middle'
          fontSize={1}
          color='black'
        >
          <meshPhongMaterial attach='material' side={THREE.DoubleSide} />
        </text>
        <CounterBDay />
      </Suspense>
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <DotScreen
          blendFunction={BlendFunction.NORMAL} // blend mode
          angle={Math.PI * 0.5} // angle of the dot pattern
          scale={1} // scale of the dot pattern
        />
      </EffectComposer>
    </Canvas>
  );
}
