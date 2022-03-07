import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";

const ModelComponent = lazy(() => import("./model"));

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <ModelComponent />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
