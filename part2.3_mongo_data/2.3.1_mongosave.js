var mongojs = require("mongojs");

var databaseUrl = "class"; 
var collections = ["ourdata", "someotherdata"];

var db = mongojs.connect(databaseUrl, collections);

//INFORMATION WE WANT TO SAVE

var someinfo = {}
someinfo.test = Math.random();

//SAVE TO DATABASE
db.ourdata.save(someinfo)

//SAVE TO DATABASE WITH NOTIFICATION WHEN DONE
db.ourdata.save(someinfo, function(error, result) {
	console.log("saved.")
	console.log(error);
	console.log(result);
})