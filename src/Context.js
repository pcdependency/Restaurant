import { createContext, useState } from "react";
import Menu from "./img/menus/compressed/menu.jpg";
import Menu2 from "./img/menus/compressed/menu2.jpg";

const Context = createContext();

const menus = [
  {
    title: "Lorem Ipsum",
    img: Menu,
  },
  {
    title: "Lorem Ipsum",
    img: Menu2,
  },
  {
    title: "Lorem Ipsum",
    img: Menu,
  },
];

const menuInitialState = {};

menus.forEach((m, i) => {
  menuInitialState[i] = {
    clicked: false,
    hover: false,
  };
});

export function ContextProvider({ children }) {
  const [menuState, setMenuState] = useState(menuInitialState);
  const [hover, setHover] = useState("");
  const [clicked, setClicked] = useState("");
  const [cHover, setCHover] = useState(false);

  function resetState() {
    setMenuState(menuInitialState);
    setHover("");
    setClicked("");
  }

  function SetMenuState(idx, key, value) {
    setMenuState((pS) => ({
      ...Object.keys(pS).map((k, i) =>
        i === idx
          ? {
              ...pS[idx],
              [key]: value,
            }
          : {
              ...pS[i],
              [key]: !value ? value : !value,
            }
      ),
    }));
    if (key === "clicked") setClicked(value ? idx : "");
    if (key === "hover") setHover(value ? idx : "");
  }

  return (
    <Context.Provider
      value={{
        menus,
        menuState,
        SetMenuState,
        resetState,
        setCHover,
        hover,
        clicked,
        cHover,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
