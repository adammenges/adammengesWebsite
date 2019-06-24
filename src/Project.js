import React from 'react'
import { useWindowSize } from './utils.js'
import GestureView from 'react-gesture-view'

// aspect ratio of my MacBook, idk seems like a good place to start
// export const projectsWidth = 2304 / 4
// export const projectsHeight = 1440 / 4

export const ProjectWrapper = (element, key, width, height) => {
  return (
    <div
      style={{
        width: width,
        height: height,
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

export const SelectionIndicator = ({ highlighted, i, onClick }) => {
  console.log(highlighted)
  console.log('i')
  console.log(i)
  return (
    <div
      key={i}
      style={{
        display: 'inline-block',
      }}
      onClick={() => onClick(i)}
    >
      <div
        className="rectangle"
        style={{
          backgroundColor: highlighted ? '#FFF' : '#555',
          marginRight: '3px',
          marginLeft: '3px',
          marginTop: '-10px',
          textAlign: 'center',
        }}
      />
    </div>
  )
}

export const Project = ({ children }) => {
  const [index, setIndex] = React.useState(0)
  const size = useWindowSize()

  // aspect ratio of my MacBook, idk seems like a good place to start
  const oriProjectsWidth = 2304 / 4
  const oriProjectsHeight = 1440 / 4

  const small = size.width <= oriProjectsWidth

  let projectsWidth = small ? size.width : oriProjectsWidth
  let projectsHeight = small
    ? oriProjectsHeight * (projectsWidth / oriProjectsWidth)
    : oriProjectsHeight

  const projectsWrapped = children.map((x, i) => {
    return ProjectWrapper(x, i, projectsWidth, projectsHeight)
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
  const selectionIndexes = [...Array(children.length).keys()]

  const main = (
    <div
      style={{
        position: 'relative',
      }}
      className="noWebShit"
    >
      {desktop}
      <div
        style={{
          width: projectsWidth,
          // margin: '0 auto',
          // height: '4px',
          // marginRight: 'auto',
          // marginLeft: 'auto',
          textAlign: 'center',
          // margin: '0 auto',
        }}
        className="noWebShit"
      >
        {selectionIndexes.map(x => {
          return (
            <SelectionIndicator
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
  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        paddingTop: '12px',
        // transform: small ? 'scale(' + size.width / projectsWidth + ')' : '',
        // margin: '0 auto',
      }}
      className="noWebShit"
    >
      <div
        style={{
          // width: projectsWidth,
          transform: small ? 'scale(' + size.width / projectsWidth + ')' : '',
          width: small ? size.width / projectsWidth : projectsWidth,
          // margin: '0 auto',
          // marginRight: 'auto',
          marginLeft: small ? 0 : (size.width - projectsWidth) / 2,
          // margin: '0 auto',
        }}
        className="noWebShit"
      >
        {main}
      </div>
    </div>
  )
}
