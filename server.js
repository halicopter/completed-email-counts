sslmode=require;

var pg = require('pg');
var app = require('express')();

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

	app.set('port', (process.env.PORT || 5000));
    app.get('/', function(req, res) {
  		client.query('SELECT COUNT(*) FROM "Signups"', function(err, result) {
			if(err) {
				return console.error('error running query', err);
			}
			var count = result.rows[0].count;
			console.log(count);
			var payload = 
          	{
            	"item": [
              		{ "text": "Completed Signups", value: count},
            	]
          	};
        	res.send(JSON.stringify(payload));
			client.end();
		});
    });
	app.listen(app.get('port'), function() {
        console.log("running at localhost:" + app.get('port'))
    });
});

