import React, { Component } from "react";
import Sidebar from "./maleculas/sideBar"
import Section from "./maleculas/section";

class Homepage extends Component {
  render() {
    return (
      <div className="d-flex flex-row">
        <Sidebar />
        <Section history={this.props.history} />
      </div>
    );
  }
}

export default Homepage;
