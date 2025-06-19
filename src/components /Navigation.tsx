import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { sideMenu_button } from '../data/data';
import Input from './Input';
import { FcGoogle } from 'react-icons/fc';
import { SiApple } from 'react-icons/si';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogInOpen, setIsLogInOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(
    localStorage.getItem('email') ? true : false
  );
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const dynamicStyles = {
    overflowHidden: {
      overflow: 'hidden',
    },
    overflowAuto: {
      overflow: 'auto',
    },
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    blockScroll();
  };
  const toggleLogIn = (): void => {
    setIsLogInOpen(!isLogInOpen);
    blockScroll();
  };
  const blockScroll = (): void => {
    if (!isMenuOpen && !isLogInOpen) {
      Object.assign(document.body.style, dynamicStyles.overflowHidden);
    } else {
      Object.assign(document.body.style, dynamicStyles.overflowAuto);
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled('nav_grey');
      } else {
        setIsScrolled('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isScrolled}`}>
      <div
        className={`${isMenuOpen || isLogInOpen ? 'overlay' : 'overlay-none'}`}
      ></div>
      <div className="nav_logo">CBT</div>
      <div className="nav_buttons">
        <button className="button_login" onClick={toggleLogIn}>
          Log in
        </button>
        <button className="button_menu" onClick={toggleMenu}>
          <IoMenu />
        </button>
      </div>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="side-menu_nav">
          <h1>Menu</h1>
          <button className="side-menu_exit-button">
            <IoClose onClick={toggleMenu} />
          </button>
        </div>
        <p className="side-menu_explore">Explore</p>
        {sideMenu_button.map((elem) => (
          <button key={elem.id} className="side-menu_button">
            <p className="button_elem">{elem.title}</p>
            <IoIosArrowForward />
          </button>
        ))}
      </div>
      <div className={`login ${isLogInOpen ? 'open' : ''}`}>
        <div className="login_nav">
          <button className="login_exit-button">
            <IoClose onClick={toggleLogIn} />
          </button>
          <h1 className="login_title">Login</h1>
          <div></div>
        </div>
        <div className="login_main">
          <h4 className="login_welcome">Welcome back</h4>
          <Input
            type="email"
            text="Email"
            isInputValid={isEmailValid}
            setIsInputlValid={setIsEmailValid}
          />
          <Input
            type="password"
            text="Password"
            isInputValid={isPasswordValid}
            setIsInputlValid={setIsPasswordValid}
          />
          <div className="login_reset-button">
            <button className="login_pink-button">Forgot your password?</button>
          </div>
          <button
            className="login_black-button"
            disabled={!isEmailValid || !isPasswordValid}
          >
            Log in
          </button>
          <div className="login_line">
            <hr />
            or
            <hr />
          </div>
          <button className="login_white-button">
            <FcGoogle />
            <span>Continue with Google</span>
          </button>
          <button className="login_white-button">
            <SiApple />
            <span>Continue with Apple</span>
          </button>
          <div className="login_create-button">
            <span>First time here?</span>
            <button className="login_pink-button">Create an account</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
