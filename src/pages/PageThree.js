import React, { useState, useContext } from "react";
import "../css/PageThree.css";
import v5 from "../img/vid/compressed/5.m4v";
import v6 from "../img/vid/compressed/6.m4v";
import v7 from "../img/vid/compressed/7.m4v";
import { useTransition, animated } from "@react-spring/web";
import { InView } from "react-intersection-observer";
import Context from "../Context";
import DesktopMenus from "../components/DesktopMenus";
import MobileMenus from "../components/MobileMenus";
import { useWindowSize } from "../utils/useWindowSize";

const vids = [v5, v6, v7];

const PageThree = () => {
  const { width } = useWindowSize();
  const { resetState } = useContext(Context);
  const [vIndex, setVideo] = useState(0);
  const Transitions = useTransition(vIndex, {
    key: vIndex,
    from: { opacity: 0 },
    enter: { opacity: 0.25 },
    leave: { opacity: 0 },
    config: { duration: 5500 },
    onRest: (_a, _b, item) => {
      if (vIndex === item) {
        setVideo((state) => (state + 1) % vids.length);
      }
    },
    exitBeforeEnter: true,
  });

  return (
    <InView threshold={0.85}>
      {({ inView, ref }) => (
        <div className="pageThreeContainer" ref={ref}>
          <div
            onClick={() => resetState()}
            className="threeBg"
            style={{
              transition: "ease-in-out 2s",
              opacity: inView ? 1 : 0,
            }}
          >
            {inView &&
              Transitions((style, i) => (
                <animated.video
                  src={vids[i]}
                  autoPlay
                  playsInline
                  muted
                  className="threeVideo"
                  style={style}
                />
              ))}
          </div>
          <div className="pageThreeContentContainer">
            {width > 750 ? <DesktopMenus /> : <MobileMenus />}
          </div>
        </div>
      )}
    </InView>
  );
};

export default PageThree;
