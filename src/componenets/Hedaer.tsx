import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';


export default function Hedaer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prev=>!prev)
  };

  return (
    <header className="fixed inset-0 z-50 h-16 flex items-center justify-between p-4">
        <div className="text-xl font-bold">
            Woo.dev
        </div>
        <nav>
            <ul className="hidden sm:flex gap-4 text-xl font-bold">
                <li>
                  <button>
                  About
                  </button>
                  </li>
                  <li>
                  <button>
                  Experience
                  </button>
                  </li>
                  <li>
                  <button>
                  Skills
                  </button>
                  </li>
                  <li>
                  <button>
                  Contact
                  </button>
                  </li>
            </ul>
            <button className='sm:hidden flex justify-center items-center' onClick={handleClick}>
              <GiHamburgerMenu size={32}/>
            </button>
        </nav>
    </header>
  )

}