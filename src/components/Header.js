import React from "react";
import useResizeAware from "react-resize-aware";

export default () => {
  const [resizeListener, sizes] = useResizeAware();
  const mobile = sizes.width < 640;
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
      {resizeListener}
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
          adam@adammenges.com
        </div>
        <div
          style={{
            fontSize: 17
          }}
        >
          720-484-0275
        </div>
      </div>
    </div>
  );
  const iphone = (
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
          adam@adammenges.com
        </div>
        <div
          style={{
            fontSize: 17
          }}
        >
          720-484-0275
        </div>
      </div>
    </div>
  );
  return mobile ? iphone : desktop;
};
