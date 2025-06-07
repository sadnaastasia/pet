import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="nav">
      <div>CBT</div>
      <div className="nav_buttons">
        <button className="nav_logIn">Log in</button>
        <button className="nav_menu" onClick={toggleMenu}>
          <IoMenu />
        </button>
      </div>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu_nav">
          <h1>Menu</h1>
          <button className="side-menu_button">
            <IoClose onClick={toggleMenu} />
          </button>
        </div>
        <p className="side-menu_explore">Explore</p>
        <button className="side-menu_button">
          <p className="side-menu_elem">Our school</p>
          <IoIosArrowForward />
        </button>
        <button className="side-menu_button">
          <p className="side-menu_elem">Our teachers</p>
          <IoIosArrowForward />
        </button>
        <button className="side-menu_button">
          <p className="side-menu_elem">Our services</p>
          <IoIosArrowForward />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
