// Component 2:
// -Receives 'name' and 'lname' props from component 1
// -Displays the received props
import React, { Component } from "react";

class Student2 extends Component {
  render() {
    const { name, lname } = this.props;

    return (
      <div>
        <h3>Received Information:</h3>
        <p>Your Name is : {name}</p>
        <p>your lname is : {lname}</p>
      </div>
    );
  }
}

export default Student2;
