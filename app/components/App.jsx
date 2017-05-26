import React, {Component} from 'react';
import Navbar from './Navbar';
import initialState from '../initialState';
import OneStudent from './SingleStudent';
import Students from './Students';
import axios from 'axios';

export default class App extends Component{
  constructor(props){
    super();
    this.state = initialState;
    console.log("PROPS", this.props)
    // this.selectStudent = this.selectStudent.bind(this);
    this.fetchCampuses = this.fetchCampuses.bind(this);
  }

  fetchCampuses(){
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(gotCampuses => {
      console.log(gotCampuses);
      this.setState({
        campuses: gotCampuses
      });
    });
  }

componentDidMount() {
  this.fetchCampuses();
}

// selectStudent(){
//   this.setState({
//     selectedStudent: 1
//   });
// }

  render(){
    console.log("STATE", this.state)
    console.log("ALSO PROPS", this.props)
    return (
      <div>
        <h2>Here's some content from AppContainer</h2>
        <div>
          <Navbar />
        </div>
          <div>
            {
              this.props.children ? React.cloneElement(this.props.children, {
              students: this.state.students,
              campuses: this.state.campuses,
              selectedStudent: this.state.selectedStudent
            }) : null
          }
          </div>
      </div>
    );
  }
}
