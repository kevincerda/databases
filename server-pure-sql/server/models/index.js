var db = require('../db');
var express = require('express');

module.exports = {
  messages: {
    get: function (callback) {
      let queryStr = `SELECT userID username, message text, roomID roomname FROM (messages INNER JOIN users ON messages.userID = users.ID)`;
      db.connection.query(queryStr, (err, results) => {
        if (err) console.log(err, 'error in models');
        callback(results);
      });

    }, // a function which produces all the messages
    post: function (object, callback) {
      let queryStr = `INSERT INTO MESSAGES (userID, message, roomID) VALUES (${req.username}, ${req.message}, ${req.roomname})`
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

