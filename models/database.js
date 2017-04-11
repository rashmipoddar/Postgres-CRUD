// var pg = require('pg');
// var conString = "postgres://postgres:root@localhost:5432/todo";
//
// var client = new pg.Client(conString);
// client.connect(function(err) {
// 	console.log("db connected");
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
//     client.end();
//   });
// });

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:root@localhost:5432/todo';

const client = new pg.Client(connectionString);
client.connect(function(err) {
	if (err) {
		return console.error('Could not connect to db', err);
	}
});

const query = client.query(
  'CREATE TABLE items1(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)', function(err, result) {
		if (err) {
			console.error(err);
		}
	});
query.on('end', () => { client.end(); });
