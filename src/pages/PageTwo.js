import React, { useEffect, useRef } from "react";
import "../css/PageTwo.css";
import Map from "google-map-react";
import { mapStyle } from "../utils/mapStyle";
import i1 from "../img/staff/compressed/1.jpg";
import i2 from "../img/staff/compressed/2.jpg";
import i3 from "../img/staff/compressed/3.jpg";
import v1 from "../img/vid/compressed/1.m4v";
import v2 from "../img/vid/compressed/2.m4v";
import v3 from "../img/vid/compressed/3.m4v";
import v4 from "../img/vid/compressed/4.m4v";
import p1 from "../img/posters/1.jpg";
import p2 from "../img/posters/2.jpg";
import p3 from "../img/posters/3.jpg";
import p4 from "../img/posters/4.jpg";
import { useInView } from "react-intersection-observer";

const cols = [
  [
    {
      title: "Schedule",
      values: ["7am – 8pm Weekdays", "9am – 3pm Weekends"],
    },
    {
      title: "Location",
      values: ["123 Address St, 12345 HI"],
    },
    {
      title: "Contact",
      values: ["tyler.steele.main@gmail.com", "555-555-5555"],
    },
  ],
  [
    {
      title: "Executive Chef",
      values: ["Lorem Ipsum"],
      img: i3,
    },
    {
      title: "Lead Chef",
      values: ["Dolor Esit"],
      img: i1,
    },
    {
      title: "Lead Waitress",
      values: ["Emit Consecuter"],
      img: i2,
    },
  ],
];

const PageTwo = () => {
  const vr1 = useRef();
  const vr2 = useRef();
  const vr3 = useRef();
  const vr4 = useRef();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      vr1.current.play();
      vr2.current.play();
      vr3.current.play();
      vr4.current.play();
    }
    if (!inView) {
      vr1.current.pause();
      vr2.current.pause();
      vr3.current.pause();
      vr4.current.pause();
    }
  }, [inView]);

  const vidCols = [
    {
      title: "Lorem",
      ref: vr1,
      vid: v1,
      poster: p1,
      style: {
        clipPath: "polygon(50% 0, 100% 100%, 0 100%, 0 0)",
      },
    },
    {
      title: "Ipsum",
      ref: vr2,
      vid: v2,
      poster: p2,
      style: {
        width: "200%",
        transform: "translateX(-25%)",
        clipPath: "polygon(60% 0, 85% 100%, 30% 100%, 5% 0)",
      },
    },
    {
      title: "Dolor",
      ref: vr3,
      vid: v3,
      poster: p3,
      style: {
        width: "200%",
        transform: "translateX(-25%)",
        clipPath: "polygon(70% 0, 95% 100%, 40% 100%, 15% 0)",
      },
    },
    {
      title: "Esit",
      ref: vr4,
      vid: v4,
      poster: p4,
      style: {
        clipPath: "polygon(100% 0, 100% 100%, 50% 100%, 0 0)",
      },
    },
  ];

  return (
    <div className="pageTwoContainer" ref={ref}>
      <div className="pageTwoVidColsContainer">
        {vidCols.map((v, i, a) => {
          return (
            <div
              key={v.title}
              className="pageTwoVidColContainer"
              style={{
                ...v.style,
                WebkitClipPath: v.style.clipPath,
                clipPath: v.style.clipPath,
                opacity: !inView && "0",
              }}
            >
              <video
                ref={v.ref}
                src={v.vid}
                playsInline
                muted
                loop
                poster={v.poster}
              />
            </div>
          );
        })}
      </div>

      <div className="pageTwoDetailsContainer">
        <div
          className="pageTwoDetailsMapContainer"
          style={{
            transition: "ease-in-out .5s",
            opacity: !inView && "0",
            transform: !inView && "translate(20px, 30px)",
          }}
        >
          <Map
            bootstrapURLKeys={{}}
            defaultCenter={[59.938043, 30.337157]}
            defaultZoom={10}
            options={{
              styles: mapStyle,
              backgroundColor: "hsla(0,0,0,0)",
            }}
          />
        </div>
        {cols.map((c) => {
          return (
            <div
              className="pageTwoInfoContainer"
              style={{
                transition: "ease-in-out .5s",
                opacity: !inView && "0",
                transform: !inView && "translate(-20px, 30px)",
              }}
            >
              {c.map((r) => {
                return (
                  <div
                    className="pageTwoInfoSectionContainer"
                    style={{
                      transition: "ease-in-out .5s",
                      opacity: !inView && "0",
                      transform: !inView && "translate(20px, 30px)",
                    }}
                  >
                    <p className="title">{r.title}</p>
                    {r.values.map((v) => {
                      return <p className="value">{v}</p>;
                    })}

                    {r.img && <img src={r.img} alt="" />}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageTwo;
