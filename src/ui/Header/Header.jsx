import React from "react";

import { NavItem } from "../../components";
import { headerMainNavigation } from "../../constants/constant";
import { useMenu } from "../../hooks/useMenu";
import { IconCloseMenu, IconMenu, Logo } from "../../images";
import "./header.css";

function Header() {
  const { showMenu, dispatch } = useMenu();

  function handleOpenMenu() {
    dispatch({ type: "menu/SHOW_MENU" });
  }

  function handleCloseMenu() {
    dispatch({ type: "menu/CLOSE_MENU" });
  }

  return (
    <header className="header">
      <div className="logo logo--box">
        <img src={Logo} alt="logo" className="logo__img" />
      </div>

      <nav className={`navbar ${showMenu ? "active" : ""}`}>
        <div className="navbar__icon-box" onClick={handleCloseMenu}>
          <img
            src={IconCloseMenu}
            className="navbar__icon navbar__icon--close-menu"
            alt="Close Menu"
          />
        </div>

        <ul className="nav">
          {headerMainNavigation.map((el) => (
            <NavItem {...el} key={el.id} />
          ))}
        </ul>

        <div className="auth">
          <button className="btn btn--login">Login</button>
          <button className="btn btn--register">Register</button>
        </div>
      </nav>

      <div className="menu menu--box">
        <div className="menu__icon-box" onClick={handleOpenMenu}>
          <img src={IconMenu} alt="Show Menu" className="menu__icon menu__icon--open-menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
