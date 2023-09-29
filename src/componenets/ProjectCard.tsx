import { motion } from 'framer-motion';

import { fadeIn } from '../utilities/motion';
import { Tilt } from 'react-tilt';

import { profileImage } from '../assets';
import { Project } from './Projects';

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const { name, description } = project;
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.25, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className='bg-tertiary p-4 rounded-2xl h-full'
      >
        <img
          src={profileImage}
          className='rounded-2xl object-cover aspect-[4/3]'
        />
        <div className='mt-4'>
          <h3 className='font-bold text-lg md:text-xl'>{name}</h3>
          <p className='mt-2'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
}
