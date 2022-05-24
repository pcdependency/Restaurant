import React, { useContext } from "react";
import Context from "../Context";
import "../css/MenuPage.css";

const MenuPage = ({ idx, m, skewed }) => {
  const { menus, hover, clicked, SetMenuState, cHover } = useContext(Context),
    c = clicked === idx,
    h = hover === idx,
    menusLength = menus.length,
    tX = -12,
    tY = 0,
    tZ = 12 * idx,
    transX = cHover ? tX + 6 : tX,
    transY = !h && hover !== "" ? tY + 2 : h ? tY - 2 : tY,
    transZ = tZ,
    rX = 0,
    rY = 45,
    rZ = 0,
    rotX = rX,
    rotY = cHover ? rY - 20 : rY,
    rotZ = rZ,
    sX = -10,
    sY = 4,
    sZ = 2,
    sO = 0.2,
    b = 0 + (menusLength - 1 - idx),
    shadX = hover !== "" ? sX + 8 : sX,
    shadY = h ? sY - 2 : sY,
    shadZ = hover !== "" ? sZ - 1 : sZ,
    shadO = hover !== "" ? sO + 0.1 : sO,
    blur = hover !== "" ? 0 : b,
    menuStyle = skewed
      ? {
          position: "absolute",
          opacity: !c && clicked !== "" ? 0 : 1,
          height: c ? "100%" : "60%",
          maxWidth: c ? "100%" : "50%",
          transform: c
            ? ""
            : !c && clicked !== ""
            ? "translateY(100vw)"
            : `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) 
      translateX(${transX}vw) translateY(${transY}vw) translateZ(${transZ}vw)`,
          filter:
            clicked !== ""
              ? ""
              : `drop-shadow(${shadX}vw ${shadY}vw ${shadZ}vw rgba(0,0,0,${shadO})) blur(${blur}px)`,
        }
      : {
          transform: `scale(${h || c ? 1.1 : 1})`,
          filter: `drop-shadow(0 ${h ? 10 : 0}px ${
            h ? 15 : 5
          }px rgba(0, 0, 0, ${h ? 0.2 : 0.8}))`,
          opacity: `${h || c ? 1 : 0.4}`,
        };

  return (
    <div
      onMouseOver={() => SetMenuState(idx, "hover", true)}
      onMouseOut={() => SetMenuState(idx, "hover", false)}
      onClick={() => SetMenuState(idx, "clicked", !c)}
      className="menuPageContainer"
      style={{
        background: `url(${m.img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...menuStyle,
      }}
    />
  );
};

export default MenuPage;
