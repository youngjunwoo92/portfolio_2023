import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';


export default function Hedaer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prev=>!prev)
  };

  return (
    <header className="h-16 bg-slate-500 flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
            Woo.dev
        </div>
        <nav>
            <ul className="hidden sm:flex gap-2 text-2xl font-bold">
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
            </ul>
            <button className='sm:hidden flex justify-center items-center' onClick={handleClick}>
              <GiHamburgerMenu size={32}/>
            </button>
        </nav>
    </header>
  )

}