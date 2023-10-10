import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { fadeIn, textVariant } from '../utilities/motion';
import { profileImage } from '../assets';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

function Hero() {
  const isMedium = useMediaQuery({ query: `(max-width: 768px )` });

  return (
    <div className='h-screen'>
      <div className='relative h-full w-full flex flex-col md:flex-row'>
        <motion.div
          variants={textVariant()}
          className='basis-1/2 md:basis-[auto] md:max-w-[480px] md:w-full text-center md:text-left flex flex-col md:justify-center text-xl'
        >
          <h2 className={styles.heroSubText}>Hi, my name is</h2>
          <h2 className={`${styles.heroHeadText}`}>Youngjun Woo</h2>
          <p className='text-lg sm:text-xl md:text-2xl font-medium mt-4'>
            A software engineer currently residing in California, United States
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('', '', 0.0125, 1)}
          className='basis-1/2 md:basis-[auto] relative md:grow order-first md:order-last '
        >
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={isMedium ? 2.3 : 1.6}>
              <MeshDistortMaterial
                color='#6b2675'
                attach='material'
                distort={0.3}
                speed={1.5}
              />
            </Sphere>
          </Canvas>
          <Image src={profileImage} />
        </motion.div>
      </div>
    </div>
  );
}

const Image = styled.img`
  object-fit: contain;
  position: absolute;
  inset: 0;
  margin: auto;
  max-width: 320px;
  width: 100%;
  aspect-ratio: 1 / 1;
  pointer-events: none;
  animation:
    animate 2s infinite ease alternate,
    borderAnimate 5s infinite ease alternate;
  border-radius: 31% 69% 59% 41% / 53% 52% 48% 47%;
  border: 8px solid white;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  @keyframes borderAnimate {
    0% {
      border-radius: 31% 69% 59% 41% / 53% 52% 48% 47%;
    }
    50% {
      border-radius: 18% 82% 33% 67% / 73% 31% 69% 27%;
    }
    100% {
      border-radius: 31% 69% 59% 41% / 53% 52% 48% 47%;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 240px;
  }
`;

export default SectionWrapper(Hero, 'home');
