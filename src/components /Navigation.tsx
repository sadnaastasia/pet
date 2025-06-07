import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
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
        <p>Explore</p>
        <div>
          <p>Our school</p>
        </div>
        <div>
          <p>Our teachers</p>
        </div>
        <div>
          <p>Our services</p>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
