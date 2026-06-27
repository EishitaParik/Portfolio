import { useGLTF } from "@react-three/drei";

const Computer = (props) => {
  const { scene } = useGLTF("/models/computer-optimized-transformed.glb");

  return (
    <primitive
      object={scene}
      scale={0.03}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI, 0]}
      {...props}
    />
  );
};

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;