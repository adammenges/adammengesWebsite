import React from 'react'
import { useWindowSize } from './utils.js'
import GestureView from 'react-gesture-view'

// aspect ratio of my MacBook, idk seems like a good place to start
export const projectsWidth = 2304 / 4
export const projectsHeight = 1440 / 4

export const Project = () => {
  const [index, setIndex] = React.useState(0)
  // const size = useWindowSize()
  // const small = size.width <= 640

  const project1 = (
    <div
      style={{
        width: projectsWidth,
        height: projectsHeight,
        backgroundColor: '#111',
        color: '#FFF',
        outline: 'none',
      }}
      className="noselect"
    >
      <div className="noselect">something111</div>
    </div>
  )
  const project2 = (
    <div
      style={{
        width: projectsWidth,
        height: projectsHeight,
        backgroundColor: '#777',
        color: '#FFF',
        outline: 'none',
      }}
      className="noselect"
    >
      <div className="noselect">something222</div>
    </div>
  )

  const desktop = (
    <div
      style={{
        width: projectsWidth,
        height: projectsHeight,
        backgroundColor: '#555',
        color: '#FFF',
        outline: 'none',
      }}
      className="noselect"
    >
      <GestureView
        value={index}
        enableMouse={true}
        onRequestChange={i => setIndex(i)}
      >
        {project1}
        {project2}
        {/* {(props, active, load) => <div {...props}>fourth panel</div>} */}
      </GestureView>
    </div>
  )
  return (
    <div style={{ position: 'relative' }} className="noselect">
      {desktop}
    </div>
  )
}
