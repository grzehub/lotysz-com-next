import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { FC, Suspense, useMemo, useRef } from "react";
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

const url = `http://localhost:3000/images/DoFA_22.svg`;

const GridHelper = () => {
  return <gridHelper args={[500, 500]} position={[0, 0, 0]} />;
};

interface SVGShapeI {
  shape: THREE.Shape;
  color: Color;
  index: number;
  position?: Vector3;
  key: string;
}

const SVGShapeElement: FC<SVGShapeI> = ({ shape, color, position }) => {
  if (!position) return null;
  return (
    <mesh>
      <meshNormalMaterial color={color} depthWrite={true} transparent />
      <extrudeBufferGeometry
        args={[shape, { bevelEnabled: false, depth: 100 }]}
      />
    </mesh>
  );
};

const SVGShape: FC = () => {
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
      <group position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
        {shapes.map((item) => (
          <SVGShapeElement
            key={item.shape.uuid}
            position={[0, 0, 0]}
            {...item}
          />
        ))}
      </group>
    </>
  );
};

const Camera: FC = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef<OrbitControls>(null);

  // camera.position.set([0, 0, 0]);
  // camera.far = 10000;
  // camera.near = 10000;
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
        <SVGShape />
      </Suspense>
      <GridHelper />
    </Canvas>
  );
}
