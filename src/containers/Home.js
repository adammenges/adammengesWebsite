import React from 'react'
import Projects from './components/projects/projects'


export default class Home extends React.Component {
  // 404 solution from here https://github.com/nozzle/react-static/issues/345
  makeReady = () => {
    if (!this.state.ready) {
      this.setState({
        ready: true,
      })
    }
  }

  componentDidMount() {
    this.changeBackground()
  }

  changeBackground() {
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

    if (iOS) {
      document.body.style.background = 'rgb(243,242,243)'
    }
  }

  render() {
    return (
      <div id="theHomeBody">
        <Projects />
      </div>
    )
  }
}
