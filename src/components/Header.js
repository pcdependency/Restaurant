import React, { useState, useEffect } from "react";
import "../css/Header.css";

const Header = ({ scrollPosition }) => {
  const [point, setPoint] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (scrollPosition <= 50) setVisible(true);
    else if (scrollPosition > point) setVisible(false);
    else setVisible(true);
    setPoint(scrollPosition);
  }, [scrollPosition, point]);

  return (
    <div
      className="headerContainer"
      style={{
        transform: !visible && `translateY(-50px)`,
        transition: "ease-in-out .3s",
      }}
    >
      <div className="headerRight">
        <p onClick={() => {}} className="link menus">
          MENUS
        </p>
        <p onClick={() => {}} className="link info">
          INFO
        </p>
        <button type="button">RESERVE</button>
      </div>
    </div>
  );
};

export default Header;
