var mongojs = require("mongojs");

var databaseUrl = "class"; 
var collections = ["ourdata", "someotherdata"];

var db = mongojs.connect(databaseUrl, collections);

//FIND ALL THINGS IN .ourdata
db.ourdata.find({}, function(error, result) {
	console.log(result);
})