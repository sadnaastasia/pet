import { IoMenu } from 'react-icons/io5';

function Navigation() {
  return (
    <nav className="nav">
      <div>CBT</div>
      <div className="nav_buttons">
        <button className="nav_logIn">Log in</button>
        <button className="nav_menu">
          <IoMenu />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
