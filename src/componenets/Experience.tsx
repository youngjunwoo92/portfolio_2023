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
        <h2 className={styles.sectionHeadText}>Experiences</h2>
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
    points: [],
  },

  {
    title: 'Front-End Developer',
    companyName: 'The Code Solution',
    location: 'Los Angeles, CA',
    icon: <MdWork />,
    iconBg: '#e91263',
    date: 'May 2022 - May 2023',
    points: [
      'Handled entire front-end development for a fully responsive multi-vendor e-commerce web app for a real estate company using React, Node.js, MySQL, and AWS with a back end developer and manager, resulting in a successful test launch.',
      'Implemented a real-time notification and chat system using web sockets, improving communication.',
      'Enhanced user experience by utilizing React Suspense and Error Boundary, handling loading states and error scenarios to provide a seamless browsing experience for users.',
      'Developed and integrated a reliable payment system using Stripe, ensuring secure/convenient customer transactions. ',
      'Streamlined the product shipping process by integrating Shipengine, optimizing logistics and delivery operations.',
      'Conducted REST API design and implemented best practices such as agile and scrum, resulting in clean and efficient code structure and improved maintainability.',
      'Implemented a robust CI/CD pipeline using GitHub Actions, enabling automated testing, building, and deployment processes, ensuring efficient and reliable releases.',
      'Deployed the web application using AWS S3, CloudFront, and EC2, ensuring scalability, high availability, and reliable user performance.',
      'Implemented effective SEO techniques with Lambda@Edge, significantly improving the visibility of the single-page application (SPA) on search engines and attracting more organic traffic to the website.',
      'Employed code splitting methodologies to enhance the initial loading speed of the single-page web application, leading to a 20% reduction in loading time. ',
    ],
  },
];

export default SectionWrapper(Experience, 'experiences');
