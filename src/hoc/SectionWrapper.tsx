import { motion } from 'framer-motion';

import { staggerContainer } from '../utilities/motion';
import { styles } from '../styles';

const SectionWrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.maxWidth} ${styles.padding} mx-auto relative z-0`}
      >
        <span className='hash-span' id={id}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
