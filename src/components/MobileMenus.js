import React, { useContext, useState } from "react";
import "../css/MobileMenus.css";
import a1 from "../img/alcohol/compressed/2c.jpg";
import a2 from "../img/alcohol/compressed/3c.jpg";
import t1 from "../img/turf/compressed/1.jpg";
import t2 from "../img/turf/compressed/4.jpg";
import s1 from "../img/seafood/compressed/1.jpg";
import s2 from "../img/seafood/compressed/3.jpg";
import Context from "../Context";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const tris = [
  {
    i: a1,
    style: {
      top: 0,
      height: "25%",
      width: "100%",
      clipPath: "polygon(95% 0, 50% 90%, 50% 90%, 5% 0)",
    },
    styleAfter: {
      clipPath: "polygon(100% 0, 50% 100%, 50% 100%, 100% 0)",
    },
  },
  {
    i: t1,
    style: {
      height: "50%",
      width: "50%",
      clipPath: "polygon(90% 50%, 90% 50%, 0 90%, 0 5%)",
    },
    styleAfter: {
      clipPath: "polygon(100% 50%, 100% 50%, 0 0, 0 0)",
    },
  },
  {
    i: s1,
    style: {
      right: 0,
      height: "50%",
      width: "50%",
      clipPath: "polygon(100% 5%, 100% 90%, 10% 50%, 10% 50%)",
    },
    styleAfter: {
      clipPath: "polygon(100% 100%, 100% 100%, 0 50%, 0 50%)",
    },
  },
  {
    i: a2,
    style: {
      height: "25%",
      width: "100%",
      bottom: 0,
      clipPath: "polygon(50% 10%, 95% 100%, 5% 100%, 50% 10%)",
    },
    styleAfter: {
      clipPath: "polygon(50% 0, 0 100%, 0 100%, 50% 0)",
    },
  },
  {
    i: t2,
    style: {
      height: "50%",
      width: "50%",
      top: "50%",
      clipPath: "polygon(90% 50%, 90% 50%, 0 95%, 0 10%)",
    },
    styleAfter: {
      clipPath: "polygon(100% 50%, 100% 50%, 0 0, 0 0)",
    },
  },
  {
    i: s2,
    style: {
      right: 0,
      height: "50%",
      width: "50%",
      top: "50%",
      clipPath: "polygon(100% 10%, 100% 95%, 10% 50%, 10% 50%)",
    },
    styleAfter: {
      clipPath: "polygon(100% 100%, 100% 100%, 0 50%, 0 50%)",
    },
  },
];

const MobileMenus = () => {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(-1);
  const { menus } = useContext(Context);
  return (
    <div className="mobileMenusContainer">
      {tris.map((t, i) => {
        return (
          <div
            className="tri"
            style={{
              background: `url(${t.i})`,
              clipPath: state ? t.styleAfter.clipPath : t.style.clipPath,
              WebkitClipPath: state ? t.styleAfter.clipPath : t.style.clipPath,
              ...t.style,
            }}
          />
        );
      })}
      <div className="content">
        {open !== -1 ? (
          <img src={menus[open].img} alt="" className="openImg" />
        ) : (
          <>
            <p>MENUS</p>
            <div
              className="button"
              style={{
                transition: "ease-in-out .3s",
                height: state ? "100%" : "min(max(40px, 2vw), 80px)",
                width: state ? "100%" : "min(max(100px, 8vw), 170px)",
                backgroundColor: state ? "transparent" : "rgb(10, 10, 10)",
                border: state ? "none" : "1px solid white",
              }}
              onClick={() => !state && setState(true)}
            >
              {state ? (
                <Carousel
                  swipeScrollTolerance={20}
                  preventMovementUntilSwipeScrollTolerance={true}
                  showIndicators={false}
                  showThumbs={false}
                  dynamicHeight={true}
                >
                  {menus.map((m, i) => {
                    return (
                      <div
                        onClick={() => setOpen(i)}
                        className="carouselImg"
                        style={{
                          background: `url(${m.img})`,
                        }}
                      />
                    );
                  })}
                </Carousel>
              ) : (
                "Check out"
              )}
            </div>
          </>
        )}
        {state && (
          <button
            type="button"
            className="closeBtn"
            style={{
              height: state ? "50px" : "0",
              width: state ? "100%" : "0",
            }}
            onClick={() => {
              open === -1 && setState(false);
              setOpen(-1);
            }}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenus;
