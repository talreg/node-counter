var express = require('express');
var router = express.Router();
var redis = require('redis');
var redisHost=process.env["REDIS_LOCATION"];
console.log(new Date()+" app running")
if(!redisHost){
	console.log("can't find redis host, using localhost.");
	var redisHost="localhost"
}
else{
	console.log("using "+redisHost+" as redis server.")
}

redis.createClient(6379,redisHost).set("counter",1,function(){})
/* GET home page. */
router.get('/', function(req, res, next) {
		var client = redis.createClient(6379,redisHost);
		client.get("counter",function(err,value){
		res.status(200).send("\r\nHello!<br>You are the "+value+" visitor.\r\n<br><hr>"+new Date());
		client.set("counter",Number(value)+1,function(){});
	});
});

module.exports = router;
