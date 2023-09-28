import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import { textVariant, fadeIn } from './../utilities/motion';
import { technologies } from '../constatns';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

import { useMediaQuery } from 'react-responsive';

type Technology = {
  name: string;
  icon: string;
};

function About() {
  const isMedium = useMediaQuery({ query: `(max-width: 768px )` });

  const middle = Math.ceil(technologies.length / 2);
  const firstHalf = technologies.slice(0, middle);
  const secondHalf = technologies.slice(middle);

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
        className='flex flex-col gap-20 mt-20'
      >
        <Marquee
          autoFill
          speed={isMedium ? 50 : 70}
          direction='right'
          pauseOnHover
        >
          {firstHalf.map((technology: Technology) => (
            <div
              key={technology.name}
              className='w-[120px] md:w-[256px] flex flex-col gap-2 items-center text-center'
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-[80px]'
              />
              <p className='text-xs md:text-lg'>{technology.name}</p>
            </div>
          ))}
        </Marquee>
        <Marquee speed={isMedium ? 50 : 70} pauseOnHover autoFill>
          {secondHalf.map((technology: Technology) => (
            <div
              key={technology.name}
              className='w-[120px] md:w-[256px] flex flex-col gap-2 items-center text-center'
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-[80px]'
              />
              <p className='text-xs md:text-lg'>{technology.name}</p>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </>
  );
}

export default SectionWrapper(About, 'about');
