import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  tcs,
  cpp,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experiences',
    title: 'Experiences',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Bachelor of Science Computer Science',
    company_name: 'California State Polytechnic University Pomona',
    location: 'Pomona, CA',
    icon: cpp,
    iconBg: '#fff',
    date: 'Aug 2015 - May 2020',
    points: [],
  },

  {
    title: 'Front-End Developer',
    company_name: 'The Code Solution',
    location: 'Los Angeles, CA',
    icon: tcs,
    iconBg: '#212121',
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

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    // image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    // image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    // image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { technologies, experiences, projects };
