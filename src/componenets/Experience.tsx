import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import ExperienceCard from './ExperienceCard';

import { textVariant } from './../utilities/motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

import 'react-vertical-timeline-component/style.min.css';

import { MdSchool, MdWork } from 'react-icons/md';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={`${styles.sectionHeadText}`}>Experiences</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline layout='1-column-left'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const experiences = [
  {
    title: 'Bachelor of Science Computer Science',
    companyName: 'California State Polytechnic University Pomona',
    location: 'Pomona, CA',
    icon: <MdSchool />,
    iconBg: '#2196f3',
    date: 'Aug 2015 - May 2020',
    description: '',
    technologies: [],
  },

  {
    title: 'Front-End Developer',
    companyName: 'The Code Solution',
    location: 'Los Angeles, CA',
    icon: <MdWork />,
    iconBg: '#e91263',
    date: 'May 2022 - May 2023',
    technologies: [
      'React',
      'Material UI',
      'Node.js',
      'MySQL',
      'Stripe',
      'Shipengine',
      'AWS',
    ],
    description:
      'Managed front-end development of a responsive e-commerce site for a real estate firm using React and Node.js. Key achievements include real-time chat, error handling, secure payments, and optimized logistics. Followed agile practices, established CI/CD, and deployed on AWS for scalability. Improved SEO and reduced loading time by 20%. Resulted in a successful launch and enhanced user experience.',
  },
];

export default SectionWrapper(Experience, 'experiences');
