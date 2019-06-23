import React from 'react'
import { useWindowSize } from './utils.js'
import GestureView from 'react-gesture-view'

// aspect ratio of my MacBook, idk seems like a good place to start
export const projectsWidth = 2304 / 4
export const projectsHeight = 1440 / 4

export const ProjectWrapper = (element, key) => {
  return (
    <div
      style={{
        width: projectsWidth,
        height: projectsHeight,
        backgroundColor: '#111',
        color: '#FFF',
        outline: 'none',
      }}
      className="noWebShit"
      key={key}
    >
      <div className="noWebShit" style={{ userSelect: 'none' }}>
        {element}
      </div>
    </div>
  )
}

export const Project = children => {
  const [index, setIndex] = React.useState(0)
  // const size = useWindowSize()
  // const small = size.width <= 640

  const projectsWrapped = children.children.map((x, i) => {
    return ProjectWrapper(x, i)
  })

  const desktop = (
    <div
      style={{
        width: projectsWidth,
        height: projectsHeight,
        backgroundColor: '#555',
        color: '#FFF',
        outline: 'none',
      }}
      className="noWebShit"
    >
      <GestureView
        value={index}
        enableMouse={true}
        onRequestChange={i => setIndex(i)}
      >
        {projectsWrapped}
        {/* {(props, active, load) => <div {...props}>fourth panel</div>} */}
      </GestureView>
    </div>
  )
  return (
    <div style={{ position: 'relative' }} className="noWebShit">
      {desktop}
    </div>
  )
}
