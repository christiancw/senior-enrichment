'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('user', {
  name: {type: Sequelize.STRING},
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
