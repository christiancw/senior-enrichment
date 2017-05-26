import React, { Component } from 'react';
import OneStudent from './SingleStudent';

export default function Students (props) {
  console.log('PROPS IN STUDENTS', props);
  const students = props.students;
  const selectStudent = props.studentSelected;
    return (
      <div>
        <h3>this will be a list of students!</h3>
        <h2>{selectStudent}</h2>
        <ul>
          { students.map(student =>
          <li key={student.id}>{student.name}</li>
          )}
        </ul>
        <OneStudent studentId={selectStudent} students={students} />
      </div>
    );
}
