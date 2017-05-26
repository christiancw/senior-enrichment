import React, { Component } from 'react';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

export default function OneStudent (props){
  const students = props.students;
  const campuses = props.campuses;
  const studentId = props.routeParams.studentId;
  const selectedStudentName = students[studentId - 1].name;
  const selectedStudentEmail = students[studentId - 1].email;
  const selectedStudentCampus = campuses[studentId - 1].name;
  const deleteStudentHandler = props.deleteStudentHandler;
  return (
    <div>
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
    <form onSubmit={deleteStudentHandler}>
      <button
        type="submit">
        Delete Student
      </button>
    </form>
  </div>
  );
}
