import { useContext } from "react";

import { MenuContext } from "../contexts/MenuContext";

import React from "react";

export function useMenu() {
  const contexts = useContext(MenuContext);

  if (!contexts) throw new Error("Make sure to use the context within the MenuContextProvider");

  return contexts;
}
