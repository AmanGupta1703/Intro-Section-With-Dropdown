import React from "react";

import "./dropdown.css";

function Dropdown({ id, text, href, icon }) {
  return (
    <div className="dropdown__item">
      <a href={href} className="dropdown__link">
        {icon && (
          <span className="dropdown__icon">
            <img src={icon} alt="" />
          </span>
        )}
        <span className="dropdown__text">{text}</span>
      </a>
    </div>
  );
}

export default Dropdown;
