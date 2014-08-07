var express = require('express');
var app = express();

var serveStatic = require('serve-static')
var favicon = require('serve-favicon');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('cookie-session')


//ADD FIRST MIDDLEWARE
app.use(favicon(__dirname + '/public/favicon.ico'));

//ADD SECOND MIDDLEWARE STATIC FILE SERVING
app.use(serveStatic(__dirname + '/public', {'index': ['default.html', 'default.htm']}))

//ADD THIRD MIDDLEWARE


app.use(function(req, res, next){
  
  console.log('================================================================');
  console.log(req.method + req.url);
  next();
});



//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

//ADD session handling, with keys.
app.use(session({
  keys: ['key1', 'key2'],
  secureProxy: false // if you do SSL outside of node
}))




//=================================================================
//CONFIGURE SWIG
var swig = require('swig');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false); //express caching
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false }); //swig caching
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

//=================================================================

var visitcounter = 0; //start on zero

app.get('/', function (req, res) {
  visitcounter += 1 //add one to visitors counter

  //realtime
  io.sockets.emit('visitnum', { visitnum: visitcounter }); //sends out over sockets
  
  //static
  res.render('index', { username: "Rouan", visitnum: visitcounter }); // swig adds the extension automatically, which can be confusing. see file views/index.html
});

app.get('/about', function (req, res) {
  res.render('about'); // file views/about.html
});

app.get('/contact', function (req, res) {
  res.render('contact'); // file views/contact.html
});

// add the contact page yourself
// add the contact page yourself
// add the contact page yourself
// add the contact page yourself
// add the contact page yourself
// add the contact page yourself

//ADD THIS AT THE END. TO HANDLE THE CASE WHERE NO ROUTE WAS FOUND
app.use(errorHandler);
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.send(500, 'Something broke! '+err);
}



//=================================================================

var server = app.listen(3000, function() {
	console.log(server.address())
    console.log('Listening on port %d', server.address().port);
});



var io = require('socket.io').listen(server, {log: false});

io.sockets.on('connection', function (socket) {
	console.log("SOCKET New Connection")

	//talk
  socket.on('message', function (data) {
    console.log("SOCKET Message " + data);    
    io.sockets.emit('message', {message: data });
  });
  
});


