import React from 'react'
import ReactTooltip from 'react-tooltip'
import { useWindowSize, sendEmail } from './utils.js'

export const WhiteHeader = () => {
  const size = useWindowSize()
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
    </div>
  )
  return (
  <div style={{ position: 'relative' }}>
    {small ? mobile : desktop}
  </div>
  );
}
