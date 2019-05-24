import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import { Header } from '../Header'
import { Project, projectsWidth, TabContent, TabContentThree } from '../Project'

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

storiesOf('Header', module).add('Usual Header', () => <Header />)

storiesOf('Project', module)
  .add('Usual Project', () => (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        paddingTop: '12px',
        // margin: '0 auto',
      }}
      className="noselect"
    >
      <div
        style={{
          width: projectsWidth,
          margin: '0 auto',
          marginRight: 'auto',
          marginLeft: 'auto',
          // margin: '0 auto',
        }}
        className="noselect"
      >
        <Project />
      </div>
    </div>
  ))
  .add('Tab Project', () => (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        paddingTop: '12px',
        // margin: '0 auto',
      }}
    >
      <div
        style={{
          width: projectsWidth,
          margin: '0 auto',
          marginRight: 'auto',
          marginLeft: 'auto',
          // margin: '0 auto',
        }}
      >
        <TabContent />
      </div>
    </div>
  ))
  .add('Tab Project Three', () => (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        paddingTop: '12px',
        // margin: '0 auto',
      }}
    >
      <div
        style={{
          width: projectsWidth,
          margin: '0 auto',
          marginRight: 'auto',
          marginLeft: 'auto',
          // margin: '0 auto',
        }}
      >
        <TabContentThree />
      </div>
    </div>
  ))
  .add('Tab Project Four', () => <TabContentThree />)
