import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import { Header } from '../Header'
import { Project } from '../Project'
import { CenterProjects } from '../Center'
import '../App.css'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

// storiesOf('Header', module).add('Usual Header', () => (
//   <div className="App">
//     <Header />
//   </div>
// ))

storiesOf('Project', module).add('Sample Project', () => (
  <CenterProjects width={576}>
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
))
