import React from 'react'
import { useWindowSize } from './utils.js'

export const WhiteHeader = () => {
  const size = useWindowSize()
  const h = size.height
  const w = size.width
  const small = w <= 640

  const desktop = (
    <div
      style={{
        backgroundColor: '#cecece',
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
          left: w / 2 + 0,
          top: h / 2 - 170,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: w / 2 - 300,
          top: h / 2 - 50, // size of div
        }}
      >
        <div
          style={{
            fontSize: 37,
            color: '#00080e',
          }}
        >
          Adam Menges
        </div>
        <div
          style={{
            fontSize: 17,
            marginTop: -2,
            color: '#00080e',
          }}
        >
          <a class="a-white" href="mailto:adam@adammenges.com">
            adam@adammenges.com
          </a>
        </div>
      </div>
    </div>
  )
  const mobile = (
    <div
      style={{
        backgroundColor: '#cecece',
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
            color: '#00080e',
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
          <a class="a-white" href="mailto:adam@adammenges.com">
            adam@adammenges.com
          </a>
        </div>
      </div>
    </div>
  )
  return <div style={{ position: 'relative' }}>{small ? mobile : desktop}</div>
}
