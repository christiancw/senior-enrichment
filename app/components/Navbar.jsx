import React, { Component } from 'react';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';


export default function Navbar (){
  return (
    <div>
      <h3>Campus Management</h3>
      <button>
        <Link to="/">  HOME  </Link>
      </button>
      <button>
        <Link to="/campuses">  CAMPUSES  </Link>
      </button>
      <button>
        <Link to="/students">  STUDENTS  </Link>
      </button>
    </div>
  )
}
