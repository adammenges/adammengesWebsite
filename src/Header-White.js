import React from 'react'
import ReactTooltip from 'react-tooltip'
import { useWindowSize, sendEmail } from './utils.js'
import { useState, useEffect } from 'react'

export const WhiteHeader = () => {
  const size = useWindowSize()
  let [prefersDark, setPrefersDark] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const message = prefersDark ? 'Try turning on light mode' : 'Try turning on dark mode'
  const icon = prefersDark ? 'lightmode.png' : 'darkmode.png'
  const showIcon = true
  
  const h = size.height
  const w = size.width
  const small = w <= 640



  const desktop = (
    <div
      style={{
        backgroundColor: '#ededed',
        height: h,
        width: w,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="me-blend-white"
        style={{
          position: 'absolute',
          left: w / 2 - 300,
          top: h / 2 - 170,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: w / 2 + 40,
          top: h / 2 - 50, // size of div
        }}
      >
        <div
          style={{
            fontSize: 37,
            color: '#2d2d2d',
          }}
        >
          Adam Menges
        </div>
        <div
          style={{
            fontSize: 17,
            marginTop: -2,
            color: '#2d2d2d',
          }}
        >
          <div class="a-white" onClick={sendEmail}>adam@adammenges.com</div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: w - 35,
          top: h - 55,
          opacity: showIcon ? 1 : 0,
        }}
      >
        <p data-tip={message}>
          <img width="30px" height="30px" src={icon} />
        </p>
        <ReactTooltip place={'left'} overridePosition={(location, currentEvent, currentTarget, node, place, desiredPlace, effect, offset) => {
          // currentTarget.location.top
          // return {left: currentTarget.location.left, top: currentTarget.location.top}
          // console.log(location, currentEvent, currentTarget, node, place, desiredPlace, effect, offset)
          // return {left: place.location.left, top: place.location.top}
          // return location
          return {left: w-205, top: h-40}
        }} />
      </div>
    </div>
  )
  const mobile = (
    <div
      style={{
        backgroundColor: '#ededed',
        height: h,
        width: w,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="me-blend-small-white"
        style={{
          position: 'absolute',
          left: w / 2 - 125,
          top: h / 2 - 225,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: w / 2 - 110,
          top: h / 2 + 45,
        }}
      >
        <div
          style={{
            fontSize: 37,
            color: '#2d2d2d',
          }}
        >
          Adam Menges
        </div>
        <div
          style={{
            fontSize: 17,
            marginTop: -2,
          }}
        >
          <div class="a-white" onClick={sendEmail}>adam@adammenges.com</div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: w - 45,
          top: h - 65,
          opacity: showIcon ? 1 : 0,
        }}
      >
        <p data-tip={message}>
          <img width="30px" height="30px" src={icon} />
        </p>
        <ReactTooltip place={'left'} overridePosition={(location, currentEvent, currentTarget, node, place, desiredPlace, effect, offset) => {
          // currentTarget.location.top
          // return {left: currentTarget.location.left, top: currentTarget.location.top}
          // console.log(location, currentEvent, currentTarget, node, place, desiredPlace, effect, offset)
          // return {left: place.location.left, top: place.location.top}
          // return location
          return {left: w-215, top: h-50}
        }} />
      </div>
    </div>
  )
  return (
  <div style={{ position: 'relative' }}>
    {small ? mobile : desktop}
  </div>
  );
}
