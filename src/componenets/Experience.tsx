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
    iconBg: '#6E5DC6',
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

  // {
  //   title: 'Freelance Web Developer',
  //   companyName: 'Lusion Fit',
  //   location: 'Remote',
  //   icon: <MdWork />,
  //   iconBg: '#C9372C',
  //   date: 'Jul 2023 - Sep 2023',
  //   technologies: ['Wix', 'JavaScript', 'jQuery', 'UI', 'UX'],
  //   description:
  //     'Revitalized and rebuilt the Lusion Fit landing page, infusing a contemporary design approach that transformed the user interface into a modern and visually compelling showcase. Also created a dynamic product list page for the existing Wix app, focusing on optimal user experience and visual aesthetics, resulting in increased user engagement and improved product discoverability.',
  // },
  // {
  //   title: 'Freelance Full Stack Engineer',
  //   companyName: 'iapplied',
  //   location: 'Remote',
  //   icon: <MdWork />,
  //   iconBg: '#1F845A',
  //   date: 'Nov 2023 - Present',
  //   technologies: ['React', 'TailwindCSS', 'Nest.js', 'PosgreSQL', 'Docker'],
  //   description:
  //     'Developing a comprehensive job application management tool designed to assist users in organizing, tracking, and analyzing their job applications. Leveraging React for dynamic user interfaces and employing Nest.js and PostgreSQL for backend operations and effective data visualization. Also implementing Test-Driven Development (TDD) methodologies throughout the project lifecycle, ensuring the reliability and scalability of the application, and maintaining a high standard of code quality.',
  // },
];

export default SectionWrapper(Experience, 'experiences');
