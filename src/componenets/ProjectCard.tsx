import { motion } from 'framer-motion';

import { fadeIn } from '../utilities/motion';
import { Tilt } from 'react-tilt';

import { Project } from './Projects';
import Chip from './Chip';

import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const { name, thumbnail, description, githubLink, link, tags, image } =
    project;

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.25, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className='flex flex-col bg-tertiary p-4 rounded-2xl h-full'
      >
        <img src={image} className='rounded-2xl object-cover aspect-[4/3]' />
        <div className='flex flex-col h-full mt-4'>
          <div className='flex items-center justify-between'>
            <h3 className='font-bold text-lg md:text-xl'>{name}</h3>
            <div className='flex gap-2 items-center'>
              <a href={githubLink} target='_blank' rel='noreferrer'>
                <BiLogoGithub size={32} />
              </a>
              <a href={link} target='_blank' rel='noreferrer'>
                <BiLinkExternal size={32} />
              </a>
            </div>
          </div>
          <p className='grow mt-2'>{description}</p>
          <div className='mt-4'>
            <div className='flex gap-2'>
              {tags.map((tag) => (
                <Chip key={tag.name} label={tag.name} color={tag.color} />
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
