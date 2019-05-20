import React from 'react'
import { useWindowSize } from './utils.js'

export const Project = () => {
  const size = useWindowSize()
  const h = size.height
  const w = size.width
  const small = w <= 640

  const desktop = (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#345',
        color: '#FFF',
      }}
    >
      <div>something</div>
    </div>
  )
  const mobile = (
    <div style={{}}>
      <div>something</div>
    </div>
  )
  return <div style={{ position: 'relative' }}>{small ? desktop : desktop}</div>
}
