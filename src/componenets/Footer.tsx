import { links } from '../constatns';
import { IconBase } from 'react-icons';

type Link = {
  id: string;
  icon: () => JSX.Element;
  link: string;
};

export default function Footer() {
  return (
    <footer className='flex p-12 text-center'>
      <div className='max-w-7xl w-full mx-auto'>
        <h2 className='text-white text-3xl font-bold'>woo.dev</h2>
        <ul className='flex mt-8 justify-center gap-4'>
          {links.map(({ id, link, icon }: Link) => (
            <li
              key={id}
              className='text-gray-500 hover:text-white transition-colors'
            >
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='flex items-center justify-center w-full h-full'
              >
                <IconBase style={{ fontSize: 40 }}>{icon()}</IconBase>
              </a>
            </li>
          ))}
        </ul>
        <p className='[&>span]:font-bold text-white mt-20'>
          Built with <span>React</span> and <span>Tailwind CSS</span>, deployed
          with <span>Vercel</span>.
        </p>
      </div>
    </footer>
  );
}
