import React, { Component } from 'react';
import CreateCampus from './CreateCampus';

export default class NewCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInputValue: '',
      locationInputValue: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
  }
  handleNameChange(evt) {
    console.log(evt.target.value);
    this.setState({
      nameInputValue: evt.target.value
    });
  }

  handleLocationChange(evt) {
    console.log(evt.target.value);
    this.setState({
      locationInputValue: evt.target.value
    });
  }

  // handleNameSubmit (evt) {
  //   evt.preventDefault();
  //   console.log(this.state.nameInputValue);
  //   // this.props.addNewCampus(this.state.inputValue);
  // }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log('submittedLocation', this.state.locationInputValue);
    console.log('submittedname', this.state.nameInputValue);
    // this.props.addNewCampus(this.state.inputValue);
  }

  render() {
    const nameInputValue = this.state.nameInputValue;
    const locationInputValue = this.state.locationInputValue;
    return (
      <CreateCampus
        nameInputValue={ nameInputValue }
        locationInputValue={ locationInputValue}
        handleNameChange={this.handleNameChange}
        handleSubmit={this.handleSubmit}
        handleLocationChange={this.handleLocationChange}
        handleLocationSubmit={this.handleLocationSubmit}/>
    )
  }
}
