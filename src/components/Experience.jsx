import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

export const Experience = () => {

  const texture = useTexture("textures/pixlr-image-generator-e32d1708-be54-40ac-a6f5-8ac1d186f287.png");
  const viewport = useThree((state) => state.viewport);


  return (
    <>
      <OrbitControls />
      <Avatar position={[0, -3, 5]} scale={2} />
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />

      </mesh>
    </>
  );
};
