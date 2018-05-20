var models = require('../models');
var express = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('are we alive?');
      // var sql = `select message from messages`;
      // res.send(200, console.log('here comes the sun')); 
      models.messages.get((data) => {
        console.log('this is data' , data)
        res.send(data);
      }); /* either makes a erquest to model  */
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body)
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

