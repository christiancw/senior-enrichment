import React, { Component } from 'react';

export default function OneCampus (props){
  const students = props.students;
  const campuses = props.campuses;
  const campusId = props.routeParams.campusId;
  const selectedCampusName = campuses[campusId - 1].name;
  const selectedCampusLocation = campuses[campusId - 1].location;
  console.log('ONECAMPUS PROPS===>', props)
  return (
    <div>
      <div>
        <table>
          <tr>
            <th>{selectedCampusName}</th>
          </tr>
          <tr>
            <td>{selectedCampusLocation}</td>
          </tr>
          <tr>
            <td>SELECTED STUDENTS HERE</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
