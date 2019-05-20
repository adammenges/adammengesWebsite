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

export { useWindowSize };
