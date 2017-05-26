import React, { Component } from 'react';

export default class Students extends Component {
  constructor(){
    super()
    this.state = {
      students: [
        {
          name: 'Gabe',
          id: 1,
          campusId: 1
        },
        {
          name: 'Ashi',
          id: 2,
          campusId: 1
        },
        {
          name: 'Dan',
          id: 3,
          campusId: 3
        },
        {
          name: 'Marvin',
          id: 4,
          campusId: 2
        }
      ]
    };
  }
  render (){
    return (
      <div>
        <h3>this will be a list of students!</h3>
        <ul>
          { this.state.students.map(student =>
          <li key={student.id}>{student.name}</li>
          )}
        </ul>
      </div>
    )
  }
}
