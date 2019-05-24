import React from 'react'
import { useWindowSize } from './utils.js'
import GestureView from 'react-gesture-view'

export function TabContentThree() {
  const [index, setIndex] = React.useState(0)
  return (
    <GestureView
      value={index}
      enableMouse={true}
      onRequestChange={i => setIndex(i)}
    >
      <div>First panel</div>
      <div>Second panel</div>
      <div>Third panel</div>
      {(props, active, load) => <div {...props}>fourth panel</div>}
    </GestureView>
  )
}

export function TabContent() {
  const [index, setIndex] = React.useState(0)
  const ref = React.useRef()

  function focusCurrentIndex() {
    ref.current.focus()
  }

  return (
    <GestureView ref={ref} value={index} onRequestChange={i => setIndex(i)}>
      <div>First panel</div>
      <div>Second panel</div>
      <div>Third panel</div>
    </GestureView>
  )
}

// aspect ratio of my MacBook, idk seems like a good place to start
export const projectsWidth = 2304 / 4
export const projectsHeight = 1440 / 4

export const Project = () => {
  const [index, setIndex] = React.useState(0)
  const size = useWindowSize()
  const small = size.width <= 640

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
  const mobile = (
    <div style={{}}>
      <div>something</div>
    </div>
  )
  return (
    <div style={{ position: 'relative' }} className="noselect">
      {small ? desktop : desktop}
    </div>
  )
}
