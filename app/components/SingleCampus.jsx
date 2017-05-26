import React, { Component } from 'react';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

export default function OneCampus (props){
  const students = props.students;
  const campuses = props.campuses;
  const campusId = props.routeParams.campusId;
  const campusStudents = students.filter(function(student){
  return student.campusId === Number(campusId);
  })
  const selectedCampusName = campuses[campusId - 1].name;
  const selectedCampusLocation = campuses[campusId - 1].location;
  return (
    <div>
      <div>
        <table>
          <tr>
            <th>{selectedCampusName}</th>
          </tr>
          <tr>
            <td>Campus Location: {selectedCampusLocation}</td>
          </tr>
          <tr>
            <td>STUDENTS</td>
          </tr>
        </table>
        <ul>
          { campusStudents.map(student =>
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link></li>
          )}
        </ul>
      </div>
      <button
        type="submit">
        Delete Campus
      </button>
    </div>
  );
}
