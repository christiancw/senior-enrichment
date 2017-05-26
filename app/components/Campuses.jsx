import React, { Component } from 'react';

export default class Campuses extends Component{
  constructor(){
    super()
    this.state = {
      campuses: [{
        name: 'acampushere'
      },
    {
      name: 'anotherCampushere'
    }]
    };
  }

// componentDidMount() {
//   const campusId = this.props.routeParams;
//   console.log('campusID===>', campusId);
// }

  render(){
    // console.log("propsRouteParams ===>", this.props.routeParams)
    return (
      <div>
        <h3>this will be a list of campuses!</h3>
          <ul>
            { this.state.campuses.map(campus =>
            <li key={campus.name}>{campus.name}</li>
            )}
          </ul>
      </div>
    );
  }
}
