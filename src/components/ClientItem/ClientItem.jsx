import React from "react";

import "./clientitem.css";

function ClientItem({ text, imgSrc }) {
  return (
    <div className="client__item">
      <img src={imgSrc} className="client__logo" alt={`${text} Logo`} />
    </div>
  );
}

export default ClientItem;
