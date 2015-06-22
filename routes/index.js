var express = require('express');
var router = express.Router();
var redis = require('redis');
redis.createClient().set("counter",1,function(){});
/* GET home page. */
router.get('/', function(req, res, next) {
		var client = redis.createClient();
		client.get("counter",function(err,value){
		res.send("you are the "+value+" visitor.");
		client.set("counter",Number(value)+1,function(){});
	});
});

module.exports = router;
