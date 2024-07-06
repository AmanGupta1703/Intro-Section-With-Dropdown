import { createContext, useReducer } from "react";

export const MenuContext = createContext();

const initialState = {
  showMenu: false,
};

function menuReducer(state, action) {
  switch (action.type) {
    case "menu/SHOW_MENU":
      return { ...state, showMenu: !state.showMenu };

    case "menu/CLOSE_MENU":
      return { ...state, showMenu: !state.showMenu };

    default:
      return state;
  }
}

function MenuContextProvider({ children }) {
  const [state, dispatch] = useReducer(menuReducer, initialState);

  return <MenuContext.Provider value={{ ...state, dispatch }}>{children}</MenuContext.Provider>;
}

export default MenuContextProvider;
