import React from 'react'
import ReactTooltip from 'react-tooltip'
import { useWindowSize, sendEmail } from './utils.js'
import { useState, useEffect } from 'react'
import me from './images/me.jpg'

export const Header = () => {
  const size = useWindowSize()
  let [prefersDark, setPrefersDark] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const message = prefersDark
    ? 'Try turning on light mode'
    : 'Try turning on dark mode'
  const icon = prefersDark ? 'lightmode.png' : 'darkmode.png'
  const showIcon = false

  const h = size.height
  const w = size.width
  const small = w <= 640

  const desktop = (
    <div
      style={{
        backgroundColor: '#020100',
        height: h,
        width: w,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="me-blend"
        style={{
          position: 'absolute',
          left: w / 2 - 540,
          top: h / 2 - 320,
          backgroundImage: `url("https://adammenges.com/me.jpg")`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: w / 2 + 70,
          top: h / 2 - 50, // size of div
        }}
      >
        <div
          style={{
            fontSize: 37,
          }}
        >
          Adam Header
        </div>
        <div
          style={{
            fontSize: 17,
            marginTop: -2,
          }}
        >
          <div
            class="a-black"
            style={{
              marginTop: '-7px',
            }}
            onClick={sendEmail}
          >
            hello@adammenges.com
          </div>
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
        <ReactTooltip
          place={'left'}
          overridePosition={(
            location,
            currentEvent,
            currentTarget,
            node,
            place,
            desiredPlace,
            effect,
            offset
          ) => {
            // currentTarget.location.top
            // return {left: currentTarget.location.left, top: currentTarget.location.top}
            // console.log(location, currentEvent, currentTarget, node, place, desiredPlace, effect, offset)
            // return {left: place.location.left, top: place.location.top}
            // return location
            return { left: w - 205, top: h - 40 }
          }}
        />
      </div>
    </div>
  )
  const mobile = (
    <div
      style={{
        backgroundColor: '#020100',
        height: h,
        width: w,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="me-blend-small"
        style={{
          position: 'absolute',
          left: w / 2 - 225,
          top: h / 2 - 225 - 50,
          backgroundImage: `url("https://adammenges.com/me.jpg")`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: w / 2 - 110,
          top: h / 2 + 125,
        }}
      >
        <div
          style={{
            fontSize: 37,
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
          <div
            class="a-black"
            style={{
              marginTop: '-7px',
            }}
            onClick={sendEmail}
          >
            hello@adammenges.com
          </div>
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
        <ReactTooltip
          place={'left'}
          overridePosition={(
            location,
            currentEvent,
            currentTarget,
            node,
            place,
            desiredPlace,
            effect,
            offset
          ) => {
            // currentTarget.location.top
            // return {left: currentTarget.location.left, top: currentTarget.location.top}
            // console.log(location, currentEvent, currentTarget, node, place, desiredPlace, effect, offset)
            // return {left: place.location.left, top: place.location.top}
            // return location
            return { left: w - 205, top: h - 40 }
          }}
        />
      </div>
    </div>
  )
  return <div style={{ position: 'relative' }}>{small ? mobile : desktop}</div>
  // return <div style={{ position: 'relative' }}>{small ? mobile : desktop}</div>
}
