var mysql = require('mysql');

//GOOGLE EXPRESS HOW TO CONNECT TO DB

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'chat'
});

connection.connect( (err) => {
    if (err) throw err;
    console.log('You are now connected :)');
});

// connection.query(request, (err, return)) {
//     if (err) throw err; 
     

// }
// connection.query(`INSERT INTO users (username, password) values ('Kevin', 'Bacon')`, (err, results) => {
//     if (err) throw err;
//     console.log(results);
// })

// connection.query(`INSERT INTO rooms (name, userID) values ('lobby', 3)`, (err, results) => {
//     if (err) throw err;
//     console.log(results);
// })

// connection.query('SELECT * FROM users', (err, results) => {
//     if (err) throw err;
//     console.log(results);
// })

// connection.query('show tables', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()


module.exports.connection = connection;