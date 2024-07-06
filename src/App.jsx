import React from "react";

import { useMenu } from "./hooks/useMenu";
import { Header, Main } from "./ui";
import { Overlay } from "./components";

function App() {
  const { showMenu } = useMenu();

  return (
    <>
      {showMenu ? <Overlay /> : null}
      <Header />
      <Main />
    </>
  );
}

export default App;
