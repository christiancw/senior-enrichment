import React, { Component } from 'react';

export default function CreateCampus (props){
  const students = props.students;
  const campuses = props.campuses;
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputValue;
  console.log("CREATE CAMPUS PROPS", props)
  return (
    <div>
      <h1>CREATING CAMPUS</h1>
      <form>
        <fieldset>
          <legend>Name</legend>
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            value={inputValue}
            />
          <legend>Location</legend>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              value={inputValue}
              />
        </fieldset>
      </form>
    </div>
  );
}
