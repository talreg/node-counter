var express = require('express');
var router = express.Router();
var redis = require('redis');
var redisHost="redis";
redis.createClient(6379,redisHost).set("counter",1,function(){})
/* GET home page. */
router.get('/', function(req, res, next) {
		var client = redis.createClient(6379,redisHost);
		client.get("counter",function(err,value){
		res.send("you are the "+value+" visitor.");
		client.set("counter",Number(value)+1,function(){});
	});
});

module.exports = router;
