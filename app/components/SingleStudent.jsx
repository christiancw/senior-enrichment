import React, { Component } from 'react';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

export default function OneStudent (props){
  console.log('oneStudentProps', props.students);
  console.log('campuspropsheremaybe', props.campuses)
  console.log(props.routeParams.studentId)
  const students = props.students;
  const campuses = props.campuses;
  const studentId = props.routeParams.studentId;
  const selectedStudentName = students[studentId - 1].name;
  const selectedStudentEmail = students[studentId - 1].email;
  const selectedStudentCampus = campuses[studentId - 1].name;
  return (
    <div>
      <h3>this will be a one particular student with details</h3>
      <div>{selectedStudentName}</div>
    <table>
      <tr>
        <th>{selectedStudentName}</th>
      </tr>
      <tr>
        <td>{selectedStudentEmail}</td>
      </tr>
      <tr>
        <td><Link to={`/campuses/${campuses[studentId - 1].id}`}>{selectedStudentCampus}</Link></td>
      </tr>
    </table>
  </div>
  );
}
