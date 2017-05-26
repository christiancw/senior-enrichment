import React, { Component } from 'react';

export default function CreateCampus (props){
  const students = props.students;
  const campuses = props.campuses;
  // const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const handleNameChange = props.handleNameChange
  const handleNameSubmit = props.handleNameSubmit
  const handleLocationChange = props.handleLocationChange
  const handleLocationSubmit = props.handleLocationSubmit
  const nameInputValue = props.nameInputValue;
  const locationInputValue = props.locationInputValue;
  console.log("CREATE CAMPUS PROPS", props)
  return (
    <div>
      <h1>CREATING CAMPUS</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Name</legend>
          <input
            className="form-control"
            type="text"
            onChange = {handleNameChange}
            value={nameInputValue}
            />
          <legend>Location</legend>
            <input
              className="form-control"
              type="text"
              onChange={handleLocationChange}
              value={locationInputValue}
              />
            <button
              type="submit">
              Create Campus
            </button>
        </fieldset>
      </form>
    </div>
  );
}
