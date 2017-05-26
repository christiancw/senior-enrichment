import React, { Component } from 'react';
import OneStudent from './SingleStudent';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';


export default function Students (props) {
  console.log('PROPS IN STUDENTS', props);
  const students = props.students;
  const selectStudent = props.selectedStudent;
    return (
      <div>
        <h3>this will be a list of students!</h3>
        <h2>{selectStudent}</h2>
        <ul>
          { students.map(student =>
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link></li>
          )}
        </ul>
        <button>
          <Link to="/students/createStudent">CREATE NEW STUDENT</Link>
        </button>
      </div>
    );
}
