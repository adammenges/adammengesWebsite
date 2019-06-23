import React from 'react'
import './App.css'
import { Header } from './Header.js'
import { Project } from './Project'
import { CenterProjects } from './Center'

function App() {
  return (
    <div className="App noWebShit">
      <Header />
      <br />
      &nbsp;
      <br />
      &nbsp;
      <br />
      <CenterProjects>
        <Project>
          <div>stuff1</div>
          <div>stuff2</div>
          <div>stuff3</div>
          <div>stuff4</div>
          <div>stuff5</div>
          <div>stuff6</div>
          <div>stuff7</div>
        </Project>
      </CenterProjects>
      <br />
      &nbsp;
      <br />
      &nbsp;
      <br />
      &nbsp;
      <br />
      &nbsp;
      <br />
      &nbsp;
      <br />
    </div>
  )
}

export default App
