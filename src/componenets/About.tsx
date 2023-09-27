import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

import { textVariant, fadeIn } from './../utilities/motion';
import { styles } from '../styles';

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-lg md:text-xl leading-[30px] max-w-3xl'
      >
        Dynamic and passionate Full Stack Developer with 1+ year of experience
        in creating responsive web applications, writing clean and efficient
        code, and integrating various systems into web-based applications.
        Demonstrated through the end to end architecture design and
        implementation of the e-commerce web application at The Code Solution as
        the sole front end developer, supporting processes from UX input to
        launch monitoring.
      </motion.p>
    </>
  );
}

export default SectionWrapper(About, 'about');
