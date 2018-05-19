var db = require('../db');
var controllers = require('../controllers')

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which produces all the messages
    post: function (req, res) {
      queryStr = `INSERT INTO MESSAGES (userID, message, roomID) VALUES (${req.username}, ${req.message}, ${req.roomname})`
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

