import React, {Component} from 'react';
import Navbar from './Navbar';
import initialState from '../initialState';
import OneStudent from './SingleStudent';
import Students from './Students';
import axios from 'axios';
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

export default class App extends Component{
  constructor(props){
    super();
    this.state = store.getState();
    this.fetchCampuses = this.fetchCampuses.bind(this);
    this.deleteStudentHandler = this.deleteStudentHandler.bind(this);
  }

  deleteStudentHandler(evt){
    evt.preventDefault();
    console.log("delete button pressed", this.props)
    const studentId = Number(this.props.params.studentId);
    axios.delete(`/api/users/:${studentId}`)
    .then(function(response){
      console.log(response)
    })
  }

  fetchCampuses(){
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(function(gotCampuses){
      store.dispatch(receiveCampuses(gotCampuses))
    });
  }

fetchStudents(){
  axios.get('/api/users')
  .then(res => res.data)
  .then(function(gotStudents){
    console.log("STUDENTS TO PASS", gotStudents)
    store.dispatch(receiveStudents(gotStudents))
  })
}

componentDidMount() {
this.fetchStudents();
this.fetchCampuses();
}

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
              deleteStudentHandler: this.deleteStudentHandler,
              selectedStudent: this.state.selectedStudent
            }) : null
          }
          </div>
      </div>
    );
  }
}
