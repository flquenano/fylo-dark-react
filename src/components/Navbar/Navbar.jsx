import React from "react";
import "./_navbar.scss";

import Logo from "assets/images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img src={Logo} alt="Logo" className="nav__logo" />
        <ul className="nav__list">
          <li className="nav__item">Features</li>
          <li className="nav__item">Team</li>
          <li className="nav__item">Sign In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
