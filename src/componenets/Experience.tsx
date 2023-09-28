import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from './../utilities/motion';
import { styles } from '../styles';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../constatns';

import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';

type Experience = {
  title: string;
  company_name: string;
  location: string;
  icon: string;
  iconBg: string;
  date: string;
  points?: string[];
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={styles.sectionHeadText}>Experiences</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience: Experience) => (
            <ExperienceCard
              key={experience.company_name}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experiences');
