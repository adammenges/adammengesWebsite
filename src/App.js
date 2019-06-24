import React from 'react'
import './App.css'
import { Header } from './Header.js'
import { Project } from './Project'
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

function App() {
  return (
    <div className="App noWebShit">
      <Header />
      <OldSchoolSpaces number={3} />
      <Project>
        <div>stuff1</div>
        <div>stuff2</div>
        <div>stuff3</div>
        <div>stuff4</div>
        <div>stuff5</div>
        <div>stuff6</div>
        <div>stuff7</div>
      </Project>
      <OldSchoolSpaces number={7} />
    </div>
  )
}

export default App
