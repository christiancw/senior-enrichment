import React, { Component } from 'react';
import CreateCampus from './CreateCampus';

export default class NewCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({
      inputValue: evt.target.value
    });
  }
  handleSubmit (evt) {
    evt.preventDefault();
    console.log(this.state.inputValue);
    // this.props.addNewCampus(this.state.inputValue);
  }
  render() {
    const inputValue = this.state.inputValue;
    return (
      <CreateCampus inputValue={ inputValue }
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    )
  }
}
