import { FocusOn } from 'react-focus-on';
import {
  FcMultipleDevices,
  FcBusiness,
  FcSelfie,
  FcHome,
  FcLeft,
  FcSms,
} from 'react-icons/fc';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: Props) {
  return (
    <FocusOn enabled={isOpen} onEscapeKey={onClose} preventScrollOnFocus>
      <div
        className={`sm:hidden w-screen bg-slate-900 fixed top-0 bottom-0 ${
          isOpen ? 'right-0' : 'right-[-100%]'
        } transition-all duration-500 z-[999]`}
      >
        <button
          onClick={onClose}
          className='h-16 flex items-center gap-2 p-4 text-2xl'
        >
          <FcLeft />
          <span>Back</span>
        </button>
        <ul className='flex flex-col'>
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className='flex items-center h-16 text-2xl py-2 px-4'
            >
              <a
                href={`#${navLink.id}`}
                onClick={onClose}
                className='flex items-center gap-2 w-full h-full'
              >
                {navLink.icon}
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </FocusOn>
  );
}

const navLinks = [
  { id: 'home', title: 'Home', icon: <FcHome /> },
  { id: 'about', title: 'About', icon: <FcSelfie /> },
  {
    id: 'experiences',
    title: 'Experiences',
    icon: <FcBusiness />,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: <FcMultipleDevices />,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: <FcSms />,
  },
];
