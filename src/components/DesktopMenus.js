import React, { useContext } from "react";
import MenuPage from "../components/MenuPage";
import Context from "../Context";

const DesktopMenus = () => {
  const { menus, setCHover } = useContext(Context);

  return (
    <>
      <div
        className="pageThreeMenusContainer"
        onMouseOver={() => setCHover(true)}
        onMouseOut={() => setCHover(false)}
      >
        {menus.map((m, i) => {
          return <MenuPage idx={i} m={m} skewed={true} />;
        })}
      </div>
      <div className="pageThreeMenusContainer">
        <p>Menus</p>
        <div className="menusRow">
          {menus.map((m, i) => {
            return <MenuPage idx={i} m={m} skewed={false} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DesktopMenus;
