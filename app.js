var express = require('express')
var app = express()
const port = 3000
// Tweet config
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var moment = require('moment');
// var ran = Math.random().toString(8).substring(2, 15) + Math.random().toString(36).substring(2, 15);


app.get('/', (req, res) => res.send('Yeah'))

app.get('/tweet', (req, res) => {
	var date = moment().format('lll');
	console.log("we are Ready");
	res.send('Lets tweet');

	var tweet = {
		status: makeid() +  ' - Querido @LibertyPR todavia sin servicio - ' + date 
	}

	T.post('statuses/update',tweet, tweetErr);

	function tweetErr(err, data, response){
		if (err) {
			console.log('Hubo un error', err);
		} else {
			console.log("Tweet exitoso... :') ");
		}
	}

	// funcion para texto random 
	function makeid() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
		for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	
		return text;
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
