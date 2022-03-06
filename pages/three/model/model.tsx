import { useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const url = `http://localhost:3000/images/Saturn.gltf`;

const Model = () => {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
};

export default Model;
