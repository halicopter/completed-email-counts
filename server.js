sslmode=require;

var pg = require('pg');

var client = new pg.Client({
  user: "xgqflynipwwdac",
  password: "5yPk0uWTw7-mEkRCMyz5r9_2Aw",
  database: "deop7op8cmtodc",
  port: 5432,
  host: "ec2-107-20-223-116.compute-1.amazonaws.com",
  ssl: true
});

client.connect(function(err) {
	if(err) {
		return console.error('could not connect to postgres', err);
	}
	client.query('SELECT COUNT(*) FROM "Signups"', function(err, result) {
		if(err) {
			return console.error('error running query', err);
		}
		var count = result.rows[0].count;
		console.log(count);
		client.end();
	});
});

