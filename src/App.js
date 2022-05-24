import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Img1 from "./img/filtered/0.jpg";
import Img2 from "./img/filtered/1.jpg";
import Img3 from "./img/filtered/2.jpg";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import Header from "./components/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const pages = [
  {
    bgImg: Img3,
    page: <PageOne key="1" />,
  },
  {
    bgImg: Img2,
    page: <PageTwo key="2" />,
  },
  {
    bgImg: Img1,
    page: <PageThree key="3" />,
  },
  {
    bgImg: "",
    page: <PageFour key="4" />,
  },
];

const App = () => {
  const scrollContainer = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [vpSize, setVpSize] = useState({
    vpWidth: window.innerWidth,
    vpHeight: window.innerHeight,
  });
  function handleScroll() {
    setScrollPosition(scrollContainer.current.container.current.scrollTop);
  }

  function handleResize() {
    setVpSize({
      vpWidth: window.innerWidth,
      vpHeight: window.innerHeight,
    });
  }

  useEffect(() => {
    scrollContainer.current.container.current.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener("resize", handleResize, {
      passive: true,
    });
  }, [scrollContainer]);

  console.log(scrollContainer);

  return (
    <div className="appContainer">
      {pages.map((p, i) => {
        const v = vpSize.vpHeight * (pages.length - i) - scrollPosition;
        return (
          <div className="imgContainer" key={i}>
            <img
              src={p.bgImg}
              alt=""
              style={{
                ...p.style,
                clipPath: `polygon(100% 0%, 100% ${v}px, 0% ${v}px, 0% 0%)`,
                WebkitClipPath: `polygon(100% 0%, 100% ${v}px, 0% ${v}px, 0% 0%)`,
              }}
            />
          </div>
        );
      })}
      <div
        className="bgOverlay"
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundColor: "rgba(20, 20, 20, 0.75)",
        }}
      />
      <Parallax
        pages={pages.length}
        ref={scrollContainer}
        className="scrollContainer"
      >
        {pages.map((p, i) => {
          return (
            <ParallaxLayer offset={i} key={i}>
              {p.page}
            </ParallaxLayer>
          );
        })}
      </Parallax>
      <Header
        scrollPosition={scrollPosition}
        scrollContainer={scrollContainer}
      />
    </div>
  );
};

export default App;
