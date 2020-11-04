import React from 'react'
import './app.css'
import { Header } from './Header.js'
import { WhiteHeader } from './Header-White.js'
import { Project } from './Project'
import { useState, useEffect } from 'react'
import { useWindowSize, sendEmail } from './utils.js'
import ReactTooltip from 'react-tooltip'
// import { CenterProjects } from './Center'

// I should do this the right way later haha
const OldSchoolSpaces = ({ number }) => {
  const spaces = [...Array(number).keys()]
  return spaces.map(() => {
    return (
      <>
        <br />
        &nbsp;
        <br />
      </>
    )
  })
}

function handleDoubleClick(e, prefersDark, setPrefersDark, setAutoSwitch) {
  // setPrefersDark(!prefersDark)
  setAutoSwitch(false)
}

function App() {
  // let [prefersDark, setPrefersDark] = useState(
  //   () =>
  //     window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches
  // )

  // force default dark mode for now until I finish designing the light mode UI
  const [prefersDark, setPrefersDark] = useState(() => {
    return true
  })

  let [autoSwitch, setAutoSwitch] = useState(() => {
    return true
  })

  const size = useWindowSize()
  const h = size.height
  const w = size.width
  const small = w <= 640

  const message = prefersDark
    ? 'Try turning on light mode'
    : 'Try turning on dark mode'

  // hack in using the right background color so the
  // scroll rubber banding works how I designed
  const baseHTML = document.querySelectorAll('html')
  baseHTML[0].style.backgroundColor = prefersDark ? '#00080e' : '#ededed'

  // this is insane, but apparently there's no event to listen for so here we are
  // setInterval(() => {
  //   const currentlyDark =
  //     window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches
  //   if (currentlyDark !== prefersDark && autoSwitch) {
  //     setPrefersDark(currentlyDark)
  //   }
  // }, 200)

  const TheHeader = prefersDark ? <Header /> : <WhiteHeader />
  return (
    <div
      className="App noWebShit"
      onDoubleClick={(e) => {
        handleDoubleClick(e, prefersDark, setPrefersDark, setAutoSwitch)
      }}
    >
      {/* <Header /> */}
      {TheHeader}
      {/* ({left:number, top: number}, currentEvent, currentTarget, node, place, desiredPlace, effect, offset) => ({left: number, top: number}) */}
      {/* <OldSchoolSpaces number={3} />
      <Project>
        <div>stuff1</div>
        <div>stuff2</div>
        <div>stuff3</div>
        <div>stuff4</div>
        <div>stuff5</div>
        <div>stuff6</div>
        <div>stuff7</div>
      </Project>
      <OldSchoolSpaces number={7} /> */}
    </div>
  )
}

export default App
