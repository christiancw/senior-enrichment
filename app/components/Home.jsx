import React, { Component } from 'react';

import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

export default function Home (){
  return (
    <div>
      <h3>hello from Home</h3>
      <h2>this should be some props: {this.children.props}</h2>
      <Link to="/students">STUDENTS</Link>
      <br></br>
      <Link to="/campuses">CAMPUSES</Link>
    </div>
  )
}
