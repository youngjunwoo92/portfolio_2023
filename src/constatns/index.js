import {
  twitterThumbnail,
  twitter,
  motionThumbnail,
  motion,
  woostagramThumbnail,
  woostagram,
  carrotGameThumbnail,
  carrotGame,
  cardMakerThumbnail,
  cardMaker,
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
    year: '2023',
    description: 'Instagram clone.',
    tags: [
      {
        name: 'Next.js',
        color: 'next',
      },
      {
        name: 'Tailwind',
        color: 'tailwind',
      },
      {
        name: 'Sanity',
        color: 'sanity',
      },
    ],
    thumbnail: woostagramThumbnail,
    image: woostagram,
    githubLink: 'https://github.com/youngjunwoo92/instagram',
    link: 'https://woostagram.vercel.app/',
  },
  {
    id: 1,
    name: 'Twitter Clone',
    year: '2021',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'React',
        color: 'react',
      },
      {
        name: 'Node.js',
        color: 'node',
      },
      {
        name: 'Express',
        color: 'express',
      },
      {
        name: 'MongoDB',
        color: 'mongo',
      },
    ],
    thumbnail: twitterThumbnail,
    image: twitter,
    githubLink: 'https://github.com/youngjunwoo92/twitter',
    link: 'https://twitter-fuck.onrender.com',
  },
  {
    id: 2,
    name: 'Motion',
    year: '2021',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'HTML',
        color: 'html',
      },
      {
        name: 'CSS',
        color: 'css',
      },
      {
        name: 'TypeScript',
        color: 'typescript',
      },
    ],
    thumbnail: motionThumbnail,
    image: motion,
    githubLink: 'https://github.com/youngjunwoo92/motion',
    link: 'https://motion-typescript.netlify.app/',
  },
  {
    id: 3,
    name: 'Carrot Game',
    year: '2021',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'HTML',
        color: 'html',
      },
      {
        name: 'CSS',
        color: 'css',
      },
      {
        name: 'JavaScript',
        color: 'javascript',
      },
    ],
    thumbnail: carrotGameThumbnail,
    image: carrotGame,
    githubLink:
      'https://github.com/youngjunwoo92/javscript/tree/main/carrot-game',
    link: 'https://carrotgame.netlify.app/',
  },
  {
    id: 4,
    name: 'Card Maker',
    year: '2021',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'React',
        color: 'react',
      },
      {
        name: 'PostCSS',
        color: 'postcss',
      },
      {
        name: 'Firebase',
        color: 'firebase',
      },
    ],
    thumbnail: cardMakerThumbnail,
    image: cardMaker,
    githubLink: 'https://github.com/youngjunwoo92/card-maker',
    link: 'https://business-car-maker.web.app/',
  },
];

export { skills, projects };
