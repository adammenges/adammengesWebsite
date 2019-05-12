import React from "react";
import "./App.css";

import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(() => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }));

  useEffect(() => {
    const onResize = e => {
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  });

  return windowSize;
};

const Header = () => {
  const size = useWindowSize();
  const h = size.height;
  const w = size.width;
  const small = w <= 640;

  const desktop = (
    <div
      style={{
        backgroundColor: "#00080e",
        height: h,
        width: w,
        position: "relative",
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
        height: h,
        width: w,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        className="me-blend-small"
        style={{
          position: "absolute",
          left: w / 2 - 225,
          top: h / 2 - 225 - 50
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
  return <div style={{ position: "relative" }}>{small ? mobile : desktop}</div>;
};

function App() {
  return <div className="App">{Header()}</div>;
}

export default App;
