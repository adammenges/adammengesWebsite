import React from 'react'
import { useWindowSize } from './utils.js'

export const Header = () => {
  const size = useWindowSize()
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
          left: w / 2 - 200,
          top: h / 2 - 320,
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
          <a class="a-black" href="mailto:adam@adammenges.com">
            adam@adammenges.com
          </a>
        </div>
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
          <a class="a-black" href="mailto:adam@adammenges.com">
            adam@adammenges.com
          </a>
        </div>
      </div>
    </div>
  )
  return <div style={{ position: 'relative' }}>{small ? mobile : desktop}</div>
}
