import Layout from "../../components/layout";
import Head from "next/head";
import React, { useRef, useState, Suspense, VFC } from "react";
import { Canvas, Color, useFrame, Vector3 } from "@react-three/fiber";

const boxesSpray = () => {
  let arr: number[] = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return arr;
};

interface BoxI {
  position?: Vector3;
  color?: Color;
  key: number;
  rotPower: number;
}

const Box: VFC<BoxI> = ({ rotPower, ...props }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!ref.current) return;
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
};

const Three: VFC = () => {
  return (
    <Layout>
      <Head>
        <title> Let's try three.js</title>
      </Head>
      <header>threej.js</header>
      <main>
        <Canvas style={{ height: "100vh" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Suspense fallback={null}>
            {boxesSpray().map((i) => (
              <Box key={i} position={[i + -2, 0, 0]} rotPower={i / 10} />
            ))}
          </Suspense>
        </Canvas>
      </main>
    </Layout>
  );
};

export default Three;
