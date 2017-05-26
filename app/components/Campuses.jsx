import React, { Component } from 'react';
import axios from 'axios';

export default class Campuses extends Component{
  constructor(props){
    super(props)
    this.state = {

    };

  }

//   fetchCampuses(){
//     axios.get('/api/campuses')
//     .then(res => res.data)
//     .then(gotCampuses => {
//       console.log(gotCampuses);
//       this.setState({
//         campuses: gotCampuses
//       });
//     });
//   }
//
// componentDidMount() {
//   this.fetchCampuses();
// }

  render(){
    console.log("propsInCampuses ===>", this.props)
    console.log("Campus State ===>", this.state);
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
