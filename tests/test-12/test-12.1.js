// Create a React Application with two class component:
// Component 1:
// -Accepts user input for 'name' and 'lname'
// -Passes those props to component 2
// -Uses useState to update displayed content when a button is clicked

// Student1.js
import React, { Component } from "react";
import Student2 from "./test-12.2";

class Student1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lname: "",
      showDetails: false,
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlelnameChange = (event) => {
    this.setState({ lname: event.target.value });
  };

  handleButtonClick = () => {
    this.setState({ showDetails: true });
  };

  render() {
    const { name, lname, showDetails } = this.state;

    return (
      <div>
        <h2>Enter Name and lname</h2>
        <label>
          Name :
          <input type="text" value={name} onChange={this.handleNameChange} />
        </label>
        <br />
        <label>
          lname :
          <input type="text" value={lname} onChange={this.handlelnameChange} />
        </label>
        <br />
        <button onClick={this.handleButtonClick}>Submit</button>

        {showDetails && <Student2 name={name} lname={lname} />}
      </div>
    );
  }
}

export default Student1;
