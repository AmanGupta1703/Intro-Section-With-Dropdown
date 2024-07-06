import React from "react";

import { Dropdown } from "../";
import { IconArrowDown, IconArrowUp } from "../../images";
import "./navitem.css";

function NavItem({ text, href, id, dropdown }) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const hasDropdownMenu = dropdown.length;

  function handleShowDropdown(e) {
    e.preventDefault();

    setShowDropdown((prev) => !prev);
  }

  return (
    <li className="nav__item">
      <a href={href} className="nav__link" onClick={handleShowDropdown}>
        <span className="nav__text">{text}</span>
        {hasDropdownMenu ? (
          <span className="nav__icon">
            <img src={showDropdown ? IconArrowUp : IconArrowDown} alt="" />
          </span>
        ) : null}
      </a>
      {hasDropdownMenu && showDropdown ? (
        <div className="dropdown">
          {dropdown.map((dropdownEl) => (
            <Dropdown {...dropdownEl} key={dropdownEl.id} />
          ))}
        </div>
      ) : null}
    </li>
  );
}

export default NavItem;
