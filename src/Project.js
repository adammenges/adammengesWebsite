import React from 'react'
// import { useWindowSize } from './utils.js'
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

export const Circle = ({ highlighted, i, onClick }) => {
  console.log(highlighted)
  console.log('i')
  console.log(i)
  return (
    <div
      key={i}
      style={{
        margin: '0 auto',
        marginTop: '10px',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
        display: 'inline-block',
        // margin: '0 auto',
      }}
      onClick={() => onClick(i)}
    >
      <div
        className="circle"
        style={{
          backgroundColor: highlighted ? '#FFF' : '#555',
          marginRight: '3px',
          marginLeft: '3px',
          textAlign: 'center',
          display: 'inline-block',
          // margin: '0 auto',
        }}
      />
    </div>
  )
}

export const Project = ({ children }) => {
  const [index, setIndex] = React.useState(0)
  // const size = useWindowSize()
  // const small = size.width <= 640

  const projectsWrapped = children.map((x, i) => {
    return ProjectWrapper(x, i)
  })

  console.log('index')
  console.log(index)

  const desktop = (
    <div
      style={{
        width: projectsWidth,
        height: projectsHeight,
        backgroundColor: '#00080e',
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
  const circleIndexes = [...Array(children.length).keys()]
  return (
    <div style={{ position: 'relative' }} className="noWebShit">
      {desktop}
      <div
        style={{
          width: projectsWidth,
          margin: '0 auto',
          marginRight: 'auto',
          marginLeft: 'auto',
          textAlign: 'center',
          // margin: '0 auto',
        }}
        className="noWebShit"
      >
        {circleIndexes.map(x => {
          return (
            <Circle
              highlighted={index === x}
              key={x}
              i={x}
              onClick={setIndex}
            />
          )
        })}
      </div>
    </div>
  )
}
