import { motion, useAnimation, useInView } from 'framer-motion';

import { fadeIn } from '../utilities/motion';
// import { Tilt } from 'react-tilt';

import { Project } from './Projects';
import Chip from './Chip';

import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';
import { useEffect, useRef } from 'react';

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const { name, thumbnail, description, githubLink, link, tags, image } =
    project;

  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  console.log({ index });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    // <motion.div
    //   ref={ref}
    //   initial='hidden'
    //   animate={controls}
    //   variants={fadeIn('up', 'spring', index * 0.25, 0.75)}
    // >
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={fadeIn('up', 'spring', 0.25, 0.75)}
    >
      <div
        // options={{ max: 25, scale: 1, speed: 450 }}
        className='group relative flex flex-col bg-tertiary p-4 rounded-2xl h-full'
      >
        <div className='relative rounded-2xl overflow-hidden w-full h-auto h-full aspect-[4/3]'>
          <img src={thumbnail} className='object-cover w-full h-full' />
          <img
            src={image}
            className='w-full h-full absolute inset-0 object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100'
          />
        </div>
        <div className='grow flex-col h-full mt-4'>
          <div className='flex items-center justify-between'>
            <h3 className='font-bold text-lg md:text-xl'>{name}</h3>
            <div className='flex gap-2 items-center'>
              <a
                href={githubLink}
                target='_blank'
                rel='noreferrer'
                className='text-slate-300 hover:text-white transition-colors'
              >
                <BiLogoGithub size={24} />
              </a>
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='text-slate-300 hover:text-white transition-colors'
              >
                <BiLinkExternal size={24} />
              </a>
            </div>
          </div>
          <p className='grow mt-2'>{description}</p>
          <div className='mt-4'>
            <div className='flex flex-wrap gap-2 mt-auto'>
              {tags.map((tag) => (
                <Chip key={tag.name} label={tag.name} color={tag.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
