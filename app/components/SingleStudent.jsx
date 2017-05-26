import React, { Component } from 'react';

export default function OneStudent (props){
  console.log('oneStudentProps', props);
  return (
    <div>
      <h3>this will be a one particular student with details</h3>
      <div>{props.students}</div>
    </div>
  );
}
