import React from "react";
import "./projectScroller.css";

export default class ProjectScroller extends React.PureComponent {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="projectScroller">
        <img src={this.props.baseImageUrl} />
      </div>
    );
  }
}
