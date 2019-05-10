import React from "react";
import useResizeAware from "react-resize-aware";

export default () => {
  const [resizeListener, sizes] = useResizeAware();
  const small = sizes.width < 640;
  const desktop = (
    <div
      style={{
        backgroundColor: "#00080e",
        height: "100vh", // maybe do this with code?
        // height: sizes.height,
        // width: sizes.width,
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
          left: sizes.width / 2 - 350 + 150,
          top: sizes.height / 2 - 350 + 30
        }}
      />
      <div
        style={{
          position: "absolute",
          left: sizes.width / 2 - 300,
          top: sizes.height / 2 - 50 // size of div
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
        height: "100vh", // maybe do this with code?
        // height: sizes.height,
        // width: sizes.width,
        position: "relative",
        // left: 0,
        // top: 0
        overflow: "hidden"
      }}
    >
      {resizeListener}
      <div
        className="me-blend"
        style={{
          position: "absolute",
          left: sizes.width / 2 - 225,
          top: sizes.height / 2 - 225 - 75
        }}
      />
      <div
        style={{
          position: "absolute",
          left: sizes.width / 2 - 110,
          top: sizes.height / 2 + 125
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
  return (
    <div>
      {resizeListener}
      {small ? mobile : desktop}
    </div>
  );
};
