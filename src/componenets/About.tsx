import { motion } from 'framer-motion';

import { textVariant, fadeIn } from './../utilities/motion';
import { SectionWrapper } from '../hoc';
import { skills } from '../constatns';
import { styles } from '../styles';

import SkillCard from './SkillCard';

export type Skill = {
  name: string;
  icon: string;
};

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-lg md:text-xl leading-[30px]'
      >
        Dynamic and passionate Full Stack Developer with 1+ year of experience
        in creating responsive web applications, writing clean and efficient
        code, and integrating various systems into web-based applications.
        Demonstrated through the end to end architecture design and
        implementation of the e-commerce web application at The Code Solution as
        the sole front end developer, supporting processes from UX input to
        launch monitoring.
      </motion.p>
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-20 flex flex-col md:grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:auto-rows-fr'
      >
        <SkillCard
          title='Languages & Frameworks'
          skills={skills['Languages & Frameworks']}
        />
        <SkillCard title='Others' skills={skills['Others']} />
      </motion.div>

      {/* <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='flex flex-col gap-10 mt-20 w-[100vw] max-w-[100vw] ml-[calc(50%-50vw)]'
      >
        <Marquee
          autoFill
          speed={isLarge ? 50 : 70}
          direction='right'
          pauseOnHover
        >
          {skills.languagesAndFrameworks.map((skill: Skill) => (
            <MarqueeIItem
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </Marquee>
        <Marquee speed={isLarge ? 50 : 70} pauseOnHover autoFill>
          {skills.others.map((skill: Skill) => (
            <MarqueeIItem
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </Marquee>
      </motion.div> */}
    </>
  );
}

export default SectionWrapper(About, 'about');
