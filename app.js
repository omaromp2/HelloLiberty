var express = require('express')
var app = express()
const port = 3000
// Tweet config
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var moment = require('moment');
var date = moment().format('LLL')


app.get('/', (req, res) => res.send('Yeah'))

app.get('/tweet', (req, res) => {
	console.log("we are Ready");
	res.send('Lets tweet');

	var tweet = {
		status: 'Querido @LibertyPR todavia sin servicio ' + date
	}

	T.post('statuses/update',tweet, tweetErr);

	function tweetErr(err, data, response){
		if (err) {
			console.log('Hubo un error', err);
		} else {
			console.log("Tweet exitoso... :') ");
		}
	}


})

app.listen(port, () => console.log(`TweetBot app listening on port ${port}!`))

// var job = schedule.scheduleJob('4*****', function(){

// 	var tweet = {
// 	status: 'Querido @LibertyPR todavia sin servicio...' + date
// 	// status: 'Ready!' + date
// 	}

// 	T.post('statuses/update', tweet, tweetErr);

// 	function tweetErr(err, data, response){
// 		if (err) {
// 			console.log('Hubo un error', err);
// 		} else {
// 			console.log("Tweet exitoso... :') ");
// 		}
// 	}
