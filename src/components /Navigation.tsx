import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import { sideMenu_button } from '../data/data';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLogIn = () => {
    setIsLogInOpen(!isLogInOpen);
  };
  return (
    <nav className="nav">
      <div>CBT</div>
      <div className="nav_buttons">
        <button className="nav_logIn" onClick={toggleLogIn}>
          Log in
        </button>
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
        {sideMenu_button.map((elem) => (
          <button key={elem.id} className="side-menu_button">
            <p className="side-menu_elem">{elem.title}</p>
            <IoIosArrowForward />
          </button>
        ))}
      </div>
      <div className={`logIn ${isLogInOpen ? 'open' : ''}`}>
        <div className="logIn_nav">
          <button className="logIn_button">
            <IoClose onClick={toggleLogIn} />
          </button>
          <h1>LogIn</h1>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
