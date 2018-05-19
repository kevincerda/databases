var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      var sql = `select * from messages`;
      res.send(200, /* either makes a erquest to model  */)
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

