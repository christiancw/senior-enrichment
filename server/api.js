'use strict'
const api = require('express').Router()
const db = require('../db');
const models = db.models;
const User = models.user;
const Campus = models.campus;
const bodyParser = require('body-parser');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.use(bodyParser.json());

api.get('/users', function(req, res, next){
  console.log(db.models.user);
  return User.findAll()
  .then(function(foundUsers){
    res.json(foundUsers);
  });
});

api.get('/users/:id', function(req, res, next){
  return User.findById(req.params.id)
  .then(function(foundUser){
    res.json(foundUser);
  });
});

api.post('/users', function(req, res, next){
  // console.log('location: ', req.body.email);
  // console.log('name===>', req.body.name);
  User.create({
    name: req.body.name,
    email: req.body.email,
    campusId: req.body.campusId
  })
  .then(function(createdUser){
    res.status(201).json(createdUser);
  });
});

api.put('/users/:id', function(req, res, next){
  // console.log(req.body);
  return User.update({
    email: req.body.email
  }, {
    where: {
      id: req.params.id
    },
    returning: true,
    plain: true
  })
  .then(function(updatedUser){
    res.json(updatedUser[1]);
  });
});

api.delete('/users/:id', function(req, res, next){
  return User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(){
    res.sendStatus(204);
  });
});

api.post('/campuses', function(req, res, next){
  // console.log('location: ', req.body.location);
  // console.log('name===>', req.body.name);
  Campus.create({
    name: req.body.name,
    location: req.body.location
  })
  .then(function(createdCampus){
    res.status(201).json(createdCampus);
  });
});

api.get('/campuses', function(req, res, next){
  return Campus.findAll()
  .then(function(foundCampuses){
    res.json(foundCampuses);
  });
});

api.get('/campuses/:id', function(req, res, next){
  return Campus.findById(req.params.id)
  .then(function(foundCampus){
    res.json(foundCampus);
  });
});

api.put('/campuses/:id', function(req, res, next){
  // console.log(req.body);
  return Campus.update({
    location: req.body.location
  }, {
    where: {
      id: req.params.id
    },
    returning: true,
    plain: true
  })
  .then(function(updatedCampus){
    res.json(updatedCampus[1]);
  });
});

api.delete('/campuses/:id', function(req, res, next){
  return Campus.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(){
    res.sendStatus(204);
  });
});

module.exports = api;
