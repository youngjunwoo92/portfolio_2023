import {
  FcHome,
  FcBusiness,
  FcSelfie,
  FcSms,
  FcMultipleDevices,
  FcLeft,
} from 'react-icons/fc';
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className='bg-tertiary fixed inset-0 animate-[slideIn_0.3s_ease-in-out]'>
      <button
        onClick={onClose}
        className='h-16 flex items-center gap-2 p-4 text-2xl'
      >
        <FcLeft />
        <span>Back</span>
      </button>
      <ul className='flex flex-col'>
        {navLinks.map((navLink) => (
          <li key={navLink.id} className='flex items-center h-16 text-2xl p-4'>
            <a
              href={`#${navLink.id}`}
              onClick={onClose}
              className='flex items-center gap-2'
            >
              {navLink.icon}
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
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
