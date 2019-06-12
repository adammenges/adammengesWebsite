import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import { Header } from '../Header'
import { Project } from '../Project'
import { Center } from '../Center'

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
  <Center>
    <Project />
  </Center>
))
