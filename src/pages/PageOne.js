import React, { useState } from "react";
import "../css/PageOne.css";
import i0 from "../img/parallax/compressed/0.png";
import i1 from "../img/parallax/compressed/1.png";
import i2 from "../img/parallax/compressed/2.png";
import i3 from "../img/parallax/compressed/3.png";
import i4 from "../img/parallax/compressed/4.png";
import i5 from "../img/parallax/compressed/5.png";
import i6 from "../img/parallax/compressed/6.png";
import { ParallaxLayer } from "@react-spring/parallax";
import { useInView } from "react-intersection-observer";

const imgs = [
  { i: i0, speed: -0.45, offset: 0 },
  { i: i1, speed: -0.4, offset: 0 },
  { i: i2, speed: -0.35, offset: 0 },
  { i: i3, speed: -0.3, offset: 0 },
  { i: i4, speed: -0.25, offset: 0 },
  {
    e: (
      <div className="titleContainer">
        <p>MT.LOREM</p>
      </div>
    ),
    speed: -0.45,
    offset: -0.63,
  },
  { i: i5, speed: -0.2, offset: 0 },
  {
    e: (
      <div className="titleContainer">
        <button>Reserve</button>
      </div>
    ),
    speed: -0.25,
    offset: -0.3,
  },
  { i: i6, speed: 0, offset: 0 },
];

const PageOne = () => {
  const [loaded, setLoaded] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  function load(c) {
    c && setLoaded((pS) => pS + 1);
  }

  return (
    <div className="pageOneContainer" ref={ref}>
      {imgs.map((i, idx) => {
        return (
          <ParallaxLayer
            key={idx}
            className={`pBannerImg ${i.i ? "clear" : ""}`}
            offset={i.offset}
            speed={i.speed}
          >
            {i.i ? (
              <img
                onLoad={(e) => load(e.target.complete)}
                src={i.i}
                alt=""
                className="pBannerImg"
              />
            ) : (
              inView && loaded === 7 && <div>{i.e}</div>
            )}
          </ParallaxLayer>
        );
      })}
    </div>
  );
};

export default PageOne;
