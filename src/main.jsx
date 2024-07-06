import React from "react";
import ReactDOM from "react-dom/client";

import MenuContextProvider from "./contexts/MenuContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </React.StrictMode>,
);
