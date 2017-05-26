import React, { Component } from 'react';
import axios from 'axios';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

export default function Campuses (props) {
  const campuses = props.campuses;
    console.log("propsInCampuses ===>", props)
    // console.log("Campus State ===>", this.state);
    return (
      <div>
        <h3>this will be a list of campuses!</h3>
        <ul>
            { campuses.map(campus =>
            <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>
            )}
          </ul>
          <button>
            <Link to="/campuses/createCampus">CREATE NEW CAMPUS</Link>
          </button>
      </div>
    );
}
