import Layout from "../../components/layout";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as THREE from "three";
import { last } from "lodash";
// import { svgImage } from "../three/svg/DoFA_22.svg"

const loader = new SVGLoader();
loader.load(
  "../images/DoFA_22.svg",
  (data) => {
    const paths = data.paths;
    const group = new THREE.Group();

    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];

      const material = new THREE.MeshNormalMaterial({
        color: path.color,
        side: THREE.DoubleSide,
      });

      const shapes = SVGLoader.createShapes(path);

      for (let j = 0; j < shapes.length; j++) {
        const shape = shapes[j];
        const geometry = new THREE.ShapeBufferGeometry(shape);
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
      }
    }
    console.log(paths);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  }
);

function boxes() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return arr;
}

export function Box({ rotPower, ...props }) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.02 + 0.01 * rotPower;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[0.1, 1, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Three = () => {
  return (
    <Layout>
      <>
        <Head>
          <title> Let's try three.js</title>
        </Head>
        <header>threej.js</header>
        <main>
          <Canvas style={{ height: "100vh" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {boxes().map((i) => (
              <Box key={i} position={[i + -2, 0, 0]} rotPower={i / 10} />
            ))}
          </Canvas>
        </main>
      </>
    </Layout>
  );
};

export default Three;
