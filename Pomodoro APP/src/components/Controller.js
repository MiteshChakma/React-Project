import React from "react";
import "./Controller.css";

class Controller extends React.Component {
  render() {
    return (
      <div className="controller">
        <button id="start_stop" onClick={this.props.onStartStop}>
          {this.props.isStart ? "Stop" : "Start"}
        </button>
        <button id="reset" onClick={this.props.onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Controller;
