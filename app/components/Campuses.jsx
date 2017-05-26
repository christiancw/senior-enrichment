import React, { Component } from 'react';

export default class Campuses extends Component{
  constructor(props){
    super(props)
    this.state = {
      campuses: props.campuses
    };
  }

// componentDidMount() {
//   const campusId = this.props.routeParams;
//   console.log('campusID===>', campusId);
// }

  render(){
    console.log("propsInCampuses ===>", this.props)
    return (
      <div>
        <h3>this will be a list of campuses!</h3>
          <ul>
            { this.props.campuses.map(campus =>
            <li key={campus.name}>{campus.name}</li>
            )}
          </ul>
      </div>
    );
  }
}
