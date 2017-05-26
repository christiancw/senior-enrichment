import React, {Component} from 'react';
import Navbar from './Navbar';
import initialState from '../initialState';
import OneStudent from './SingleStudent';
import Students from './Students';
import axios from 'axios';
// import receiveStudents from '../action-creators/students'
import store from '../store';

const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS'

const someAction = {type: RECEIVE_STUDENTS, students: 'helloooooooooplease'}

const receiveStudents = function (students){
  return {
    type: RECEIVE_STUDENTS,
    students: students
  }
}

const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES';
const receiveCampuses = function (campuses){
  return {
    type: RECEIVE_CAMPUSES,
    campuses: campuses
  }
}

// const anotherAction = receiveStudents([3,4,5]);

export default class App extends Component{
  constructor(props){
    super();
    this.state = store.getState();
    console.log("PROPS", this.props)
    // this.selectStudent = this.selectStudent.bind(this);
    this.fetchCampuses = this.fetchCampuses.bind(this);
  }

  fetchCampuses(){
    axios.get('/api/campuses')
    .then(res => res.data)
    // .then(gotCampuses => {
    //   console.log("GOT CAMPUSES", gotCampuses);
    //   this.setState({
    //     campuses: gotCampuses
    //   });
    // });
    .then(function(gotCampuses){
      store.dispatch(receiveCampuses(gotCampuses))
    })
  }

// componentDidMount() {
//   this.fetchCampuses();
// }

// fetchStudents(){
//   axios.get('/api/users')
//   .then(res => res.data)
//   .then(gotStudents => {
//     console.log(gotStudents);
//     this.setState({
//       students: gotStudents
//     });
//   });
// }

fetchStudents(){
  axios.get('/api/users')
  .then(res => res.data)
  // .then(function(gotStudents) => {
  //   console.log("GOT STUDENTS==>", Array.isArray(gotStudents))
  //   // store.dispatch(receiveStudents(gotStudents));
  //   // console.log("dispatched action ===>", receiveStudents(gotStudents));
  // })
  .then(function(gotStudents){
    console.log("STUDENTS TO PASS", gotStudents)
    store.dispatch(receiveStudents(gotStudents))
  })
}

componentDidMount() {
this.fetchStudents();
this.fetchCampuses();
}

// componentDidMount() {
// store.dispatch(receiveStudents([3,4,5]));
// }

  render(){
    console.log("STATE", this.state)
    console.log("ALSO PROPS", this.props)
    console.log("STORE", store.getState())
    return (
      <div>
        <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
        <div>
          <Navbar />
        </div>
          <div>
            {
              this.props.children ? React.cloneElement(this.props.children, {
              students: store.getState().students.students,
              campuses: store.getState().campuses.campuses,
              selectedStudent: this.state.selectedStudent
            }) : null
          }
          </div>
      </div>
    );
  }
}
