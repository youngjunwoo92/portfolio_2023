import {
  woostagramThumbnail,
  carrotGameThumbnail,
  cardMakerThumbnail,
  twitterThumbnail,
  motionThumbnail,
  woostagram,
  carrotGame,
  javascript,
  typescript,
  reactQuery,
  cardMaker,
  tailwind,
  twitter,
  reactjs,
  mongodb,
  motion,
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

export const skills = {
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

export const projects = [
  {
    id: 0,
    name: 'Woostagram',
    year: '2023',
    description:
      'Built an Instagram Clone project using Next.js for server-side rendering to deepen my understanding of web development, featuring user authentication, post creation, commenting, and a follow/unfollow system.',
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
      'This MERN Stack Twitter clone showcases my back-end development skills, acquired to complement my expertise in front-end development. It demonstrates my proficiency in server management, database handling, and HTTP protocols.',
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
      'Motion is a TypeScript and OOP learning project with features for adding, deleting, and drag-and-drop content elements.',
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
      'Simple game built with vanilla JavaScript. Created to enhance my understanding of JavaScript DOM (Document Object Model) manipulation, the game challenges users to find and click on all the hidden carrots within a specified time limit. ',
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
      'Web application that simplifies the creation and real-time editing of business cards. Users can design their cards and see changes saved instantly with Firebase Realtime Database.',
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
