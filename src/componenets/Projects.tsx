import { motion, useAnimation, useInView } from 'framer-motion';

import { SectionWrapper } from '../hoc';

import ProjectCard from './ProjectCard';

import { textVariant, fadeIn } from '../utilities/motion';
import { styles } from '../styles';
import { projects } from '../constatns';
import { useRef, useEffect } from 'react';

type Tag = {
  name: string;
  color: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  tags: Tag[];
  thumbnail: string;
  image: string;
  githubLink: string;
  link: string;
};

const Projects = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const isTitleInView = useInView(titleRef);
  const isDescInView = useInView(descRef);

  const titleControl = useAnimation();
  const descControl = useAnimation();

  useEffect(() => {
    if (isTitleInView) {
      titleControl.start('show');
    }
  }, [titleControl, isTitleInView]);

  useEffect(() => {
    if (isDescInView) {
      descControl.start('show');
    }
  }, [descControl, isDescInView]);

  return (
    <>
      <motion.div
        ref={titleRef}
        variants={textVariant()}
        animate={titleControl}
        initial='hidden'
      >
        <p className={styles.sectionSubText}>SHOWCASING MY PROJECTS</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p
        ref={descRef}
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-lg md:text-xl leading-[30px]'
        animate={descControl}
        initial='hidden'
      >
        These projects offer a glimpse into my world of web development,
        featuring websites, web applications, and interactive experiences that
        I'm proud to share. Each project is a reflection of my passion for
        building user-friendly and engaging digital solutions. Dive into this
        collection to witness the diversity of my skills and the commitment I
        pour into every project.
      </motion.p>

      <div className='mt-20 grid gap-4 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] auto-rows-fr'>
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
