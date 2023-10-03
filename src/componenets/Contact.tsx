import SectionWrapper from './../hoc/SectionWrapper';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { textVariant } from '../utilities/motion';

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>LET'S CONNECT</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
