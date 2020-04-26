import { useState, useEffect } from 'react'

const sendEmail = () => {
  var url;
  url = 'mailto:' + "hello@adammenges.com"
  url += '?subject=' + "👋"
  url += '&body=' + ''
  // window.open(url);
  window.location = url;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(() => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  }))

  useEffect(() => {
    const onResize = e => {
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      })
      // work around iPad bug on orientationchange
      setInterval(() => {
        setWindowSize({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
        })
      }, 100)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  })

  return windowSize
}

export { useWindowSize, sendEmail }
