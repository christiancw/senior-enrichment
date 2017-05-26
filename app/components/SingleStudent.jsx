import React, { Component } from 'react';

export default function OneStudent (props){
  console.log('oneStudentProps', props);
  console.log(props.routeParams.studentId)
  const students = props.students;
  const studentId = props.routeParams.studentId;
  const selectedStudentHere = students[studentId].name;
  return (
    <div>
      <h3>this will be a one particular student with details</h3>
      <div>{selectedStudentHere}</div>
    </div>
  );
}
