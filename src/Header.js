
import logo from "./images/logo.png"

function Header() {
    return (
      <nav className="nav">
        <img className="logo" src={logo}/>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    );
  }

  export default Header