import React, {Component} from 'react';

export default class App extends Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    console.log(this.props)
    return (
      <div>
        <h2>Here's some content</h2>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
