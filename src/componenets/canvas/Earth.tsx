import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from '@react-three/drei';

import CanvasLoader from '../CanvasLoader';
// import { useControls } from 'leva';
// import CameraPositionLogger from '../../helper/CameraPositionLogger';

const actionNames = ['Take 001'];

const Earth = () => {
  const model = useGLTF('./cosmonaut_on_a_rocket/scene.gltf');
  const animations = useAnimations(model.animations, model.scene);

  // const { scale } = useControls({
  //   scale: { value: 0.015, min: 0.001, max: 0.1 },
  // });

  useFrame(() => {
    {
      actionNames.forEach((actionName) => {
        const action = animations.actions[actionName];
        action?.play();
      });
    }
  });

  return (
    <mesh>
      <primitive
        object={model.scene}
        scale={0.015}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  // const { intensity, position, fov, near, far, pointLight, DL, PLI } =
  //   useControls({
  //     intensity: { value: 2, min: 0, max: 5 },
  //     position: { value: [4.08, -6, 6.65], min: -10, max: 10 },
  //     fov: { value: 45, min: 0, max: 100 },
  //     near: { value: 0.1, min: 0, max: 1.0 },
  //     far: { value: 1000, min: 0, max: 4000 },
  //     pointLight: { value: [0, 0, 0], min: -100, max: 100 },
  //     DL: { value: 3, min: -100, max: 100 },
  //     PLI: { value: 1, max: 5 },
  //   });

  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [3.91, 0, 9.03],
      }}
    >
      <ambientLight intensity={2} />
      <pointLight position={[2, 2, 2]} intensity={1.24} />
      <directionalLight intensity={3} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* <CameraPositionLogger /> */}
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
