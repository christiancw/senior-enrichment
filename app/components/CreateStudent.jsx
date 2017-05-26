import React, { Component } from 'react';

export default function CreateCampus (props){
  const students = props.students;
  const campuses = props.campuses;
  // const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const handleNameChange = props.handleNameChange
  const handleEmailChange = props.handleEmailChange
  const nameInputValue = props.nameInputValue;
  const emailInputValue = props.emailInputValue;
  const handleCampusIdChange = props.handleCampusIdChange
  const CampusIdInputValue = props.CampusIdInputValue;
  console.log("CREATE STUDENT PROPS", props)
  return (
    <div>
      <h1>CREATING STUDENT</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Name</legend>
          <input
            className="form-control"
            type="text"
            onChange = {handleNameChange}
            value={nameInputValue}
            />
          <legend>Email</legend>
            <input
              className="form-control"
              type="text"
              onChange={handleEmailChange}
              value={emailInputValue}
              />
            <legend>CampusId</legend>
                <input
                  className="form-control"
                  type="text"
                  onChange={handleCampusIdChange}
                  value={CampusIdInputValue}
                  />
            <button
              type="submit">
              Create Student
            </button>
        </fieldset>
      </form>
    </div>
  );
}
