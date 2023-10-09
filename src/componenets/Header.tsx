import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { navLinks } from '../constatns/index';
import { styles } from '../styles';
import Modal from './Modal';

export type NavLink = {
  id: string;
  title: string;
};

type Props = {
  activeSection: string | null;
};

export default function Header({ activeSection }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 150 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? 'bg-primary' : 'bg-dark'
      } fixed top-0 left-0 right-0 z-50 w-full h-[64px] transition duration-300`}
    >
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
                  activeSection === navLink.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }
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
      <Modal isOpen={isOpen} onClose={handleClose} />
    </header>
  );
}
