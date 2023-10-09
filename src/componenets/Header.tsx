import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { navLinks } from '../constatns/index';
import { styles } from '../styles';
// import Modal from './Modal';

type NavLink = {
  id: string;
  title: string;
};

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>('');

  console.log({ isOpen });

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickLink = (title: string) => {
    setActive(title);
  };

  return (
    <header className='bg-primary fixed top-0 left-0 right-0 z-50 w-full h-16'>
      <div
        className={`${styles.maxWidth} w-full mx-auto flex items-center justify-between p-4`}
      >
        <h1 className='text-xl font-bold'>
          <Link to='#'>Woo.dev</Link>
        </h1>
        <nav>
          <ul className='hidden sm:flex gap-4 text-xl font-medium'>
            {navLinks.map((navLink: NavLink) => (
              <li
                key={navLink.id}
                className={
                  active === navLink.title
                    ? 'text-white'
                    : 'text-secondary hover:text-white'
                }
                onClick={() => handleClickLink(navLink.title)}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
          <button
            className='sm:hidden flex justify-center items-center'
            onClick={handleClick}
          >
            <GiHamburgerMenu size={32} />
          </button>
        </nav>
      </div>
      {/* <Modal isOpen={true} onClose={() => {}} /> */}
    </header>
  );
}
