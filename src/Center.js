import React from 'react'
import { projectsWidth } from './Project'

// This component is really just to center things in storybook,
// because it bothers me otherwise, haha
export const CenterProjects = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        paddingTop: '12px',
        // margin: '0 auto',
      }}
      className="noWebShit"
    >
      <div
        style={{
          width: projectsWidth,
          margin: '0 auto',
          marginRight: 'auto',
          marginLeft: 'auto',
          // margin: '0 auto',
        }}
        className="noWebShit"
      >
        {children}
      </div>
    </div>
  )
}
