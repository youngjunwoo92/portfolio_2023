import {
  javascript,
  typescript,
  reactQuery,
  tailwind,
  reactjs,
  mongodb,
  nodejs,
  redux,
  mysql,
  html,
  next,
  mui,
  css,
  git,
} from '../assets';

export const navLinks = [
  { id: 'home', title: 'Home' },
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

const skills = {
  languagesAndFrameworks: [
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
    { name: 'Next JS', icon: next },
    {
      name: 'Node JS',
      icon: nodejs,
    },
  ],
  others: [
    { name: 'React Query', icon: reactQuery },
    {
      name: 'Redux Toolkit',
      icon: redux,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Material UI',
      icon: mui,
    },
    { name: 'MySQL', icon: mysql },
    {
      name: 'MongoDB',
      icon: mongodb,
    },
    {
      name: 'Git',
      icon: git,
    },
  ],
};

const projects = [
  {
    id: 0,
    name: 'Woostagram',
    date: 'May 2023',
    description: 'Instagram clone.',
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
    githubLink: 'https://github.com/',
  },
  {
    id: 1,
    name: 'Twitter Clone',
    date: 'Sep 2021',
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
    githubLink: 'https://github.com/',
  },
  {
    id: 2,
    name: 'Carrot Game',
    date: 'July 2021',
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
    githubLink: 'https://github.com/',
  },
  {
    id: 3,
    name: 'Card Maker',
    date: 'Aug 2021',
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
    githubLink: 'https://github.com/',
  },
];

export { skills, projects };
