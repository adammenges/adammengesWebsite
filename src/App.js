import React from 'react'
import './app.css'
import { Header } from './Header.js'
import { WhiteHeader } from './Header-White.js'
import { Project } from './Project'
import { useState, useEffect } from 'react'
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

function handleDoubleClick(e, prefersDark, setPrefersDark) {
  setPrefersDark(!prefersDark)
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

  // hack in using the right background color so the scroll rubber banding works
  // how I designed
  const baseHTML = document.querySelectorAll('html')
  baseHTML[0].style.backgroundColor = prefersDark ? '#00080e' : '#ededed'

  const TheHeader = prefersDark ? <Header /> : <WhiteHeader />
  return (
    <div
      className="App noWebShit"
      onDoubleClick={e => {
        handleDoubleClick(e, prefersDark, setPrefersDark)
      }}
    >
      {/* <Header /> */}
      {TheHeader}
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
