import React, {Component} from 'react';
import Navbar from './Navbar';
import initialState from '../initialState';
import OneStudent from './SingleStudent';
import Students from './Students';

export default class App extends Component{
  constructor(props){
    super();
    this.state = initialState;
    console.log("PROPS", this.props)
  }
  render(){
    console.log("STATE", this.state)
    console.log("ALSO PROPS", this.props)
    return (
      <div>
        <h2>Here's some content</h2>
        <div>
          <Navbar />
          <div>
            {this.props.children}
          </div>
          <div>
            <h3>another attempt</h3>
            <OneStudent />
          </div>
        </div>
      </div>
    );
  }
}
