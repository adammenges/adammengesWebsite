import React from 'react'
import './about.css'

export default class AboutUs extends React.PureComponent {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }

  contactUsLink = () => (
    <a
      href="mailto:info@lobe.ai"
      target="_top"
      className="mainAboutHeaderContactUsLink"
    >
      Contact Us
    </a>
  )

  render() {
    return null
  }
}
