import React, { Component } from 'react';
import CreateStudent from './CreateStudent';
import axios from 'axios';

export default class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInputValue: '',
      emailInputValue: '',
      CampusIdInputValue: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCampusIdChange = this.handleCampusIdChange.bind(this);
  }
  handleNameChange(evt) {
    this.setState({
      nameInputValue: evt.target.value
    });
  }

  handleEmailChange(evt) {
    this.setState({
      emailInputValue: evt.target.value
    });
  }

  handleCampusIdChange(evt) {
    this.setState({
      CampusIdInputValue: evt.target.value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const name = this.state.nameInputValue;
    const email = this.state.emailInputValue;
    const campusId = Number(this.state.CampusIdInputValue);
    axios.post('/api/users', {
      name: name,
      email: email,
      campusId: campusId
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(console.log('error'))
    this.setState({
      nameInputValue: '',
      emailInputValue: '',
      CampusIdInputValue: ''
    })
    // this.props.addNewStudent(this.state.inputValue);
  }

  render() {
    const nameInputValue = this.state.nameInputValue;
    const emailInputValue = this.state.emailInputValue;
    const CampusIdInputValue = this.state.CampusIdInputValue;
    return (
      <CreateStudent
        nameInputValue={ nameInputValue }
        emailInputValue={ emailInputValue}
        CampusIdInputValue={ CampusIdInputValue }
        handleNameChange={this.handleNameChange}
        handleSubmit={this.handleSubmit}
        handleEmailChange={this.handleEmailChange}
        handleCampusIdChange={this.handleCampusIdChange}
        />
    )
  }
}
