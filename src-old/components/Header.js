import React from "react";
// import useResizeAware from "react-resize-aware";
// import { useWindowSize } from "react-hooks-window-size";

import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onResize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  });

  return windowSize;
};

export default () => {
  // const [resizeListener, sizes] = useResizeAware();

  // React.useEffect(() => {
  //   console.log("size.width " + size.width);
  //   console.log("size.height " + size.height);
  // }, [size.width, size.height]);

  const size = useWindowSize();
  let small = false;
  let h = "100vh";
  let w = "100vw";
  if (typeof window !== "undefined") {
    small = size.width < 640;
    h = window.innerHeight;
    w = window.innerWidth;
    if (size.height) {
      h = size.height;
    }
    if (size.width) {
      w = size.width;
    }
  }

  const desktop = (
    <div
      style={{
        backgroundColor: "#00080e",
        // height: "100vh", // maybe do this with code?
        height: h,
        width: w,
        position: "relative",
        // left: 0,
        // top: 0
        overflow: "hidden"
      }}
    >
      <div
        className="me-blend"
        style={{
          position: "absolute",
          left: w / 2 - 200,
          top: h / 2 - 320
        }}
      />
      <div
        style={{
          position: "absolute",
          left: w / 2 - 300,
          top: h / 2 - 50 // size of div
        }}
      >
        <div
          style={{
            fontSize: 37
          }}
        >
          Adam Menges
        </div>
        <div
          style={{
            fontSize: 17,
            marginTop: -2
          }}
        >
          <a href="mailto:adam@adammenges.com">adam@adammenges.com</a>
        </div>
        <div
          style={{
            fontSize: 17
          }}
        >
          <a href="sms:720-484-0275">720-484-0275</a>
        </div>
      </div>
    </div>
  );
  const mobile = (
    <div
      style={{
        backgroundColor: "#00080e",
        // height: "100vh", // maybe do this with code?
        height: h,
        width: w,
        position: "relative",
        // left: 0,
        // top: 0
        overflow: "hidden"
      }}
    >
      <div
        className="me-blend"
        style={{
          position: "absolute",
          left: w / 2 - 225,
          top: h / 2 - 225 - 75
        }}
      />
      <div
        style={{
          position: "absolute",
          left: w / 2 - 110,
          top: h / 2 + 125
        }}
      >
        <div
          style={{
            fontSize: 37
          }}
        >
          Adam Menges
        </div>
        <div
          style={{
            fontSize: 17,
            marginTop: -2
          }}
        >
          <a href="mailto:adam@adammenges.com">adam@adammenges.com</a>
        </div>
        <div
          style={{
            fontSize: 17
          }}
        >
          <a href="sms:720-484-0275">720-484-0275</a>
        </div>
      </div>
    </div>
  );
  console.log(small);
  return <div style={{ position: "relative" }}>{small ? mobile : desktop}</div>;
};
