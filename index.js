var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var GoogleAuth = require('google-auth-library');
var CLIENT_ID = "332330513278-7uboe8hl0v0cdnan6orf83opb3p29j9m.apps.googleusercontent.com";
var auth = new GoogleAuth;
var client = new auth.OAuth2(CLIENT_ID, '', '');
//var XMLHttpRequest = require('xhr2'); //npm install xhr2
var http = require("http");
var bodyParser = require("body-parser");

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moviesdb', { useMongoClient: true });


var server_port = 3000;

//set as static file server...
app.use(express.static(__dirname + '/public'));

//parse jQuery JSON to useful JS object
app.use(bodyParser.urlencoded({ extended: false }));

//create http server
http.createServer(app).listen(server_port);
// app.listen(server_port, function() {
//     console.log("Listening on port : " + server_port);
// });
  
app.get('/', function(req,res){
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/genre', function(req,res){
    res.sendFile(__dirname + '/views/genre.html');
});
app.get('/decade', function(req,res) {
    res.sendFile(__dirname + '/views/decade.html');
});
app.get('/login', function(req,res) {
    res.sendFile(__dirname + '/views/loginPage.html');
});
app.get('/genre/horror', function(req,res) {
    res.sendFile(__dirname + '/views/movieSelection.html');
});

//Recieve id from sign in 
app.post("/userIdPost", function(req, res) {
    //console.log("Routing to examplePost post request reached.");//msg to terminal 
    console.log(req.body); //print ID to console. 
    if (req.body !== undefined){ // check if undefined
        res.send({ status: "Success" });
    }
    else{
        //send fail response
        res.send({ status: "failure" });
    }
    //res.send({ status: "Success" });
});

//testing how to use a post route 
app.post("/notes", function(req, res) {
    //store new object in req.body
    var newNote = req.body;
    console.log(newNote);
    //push new note to JSON
    //notes["travelNotes"].push(newNote);
    //return simple JSON object
    res.json({
      "message": "post complete to server"
    });
  });
  
  var movieSchema = mongoose.Schema
  ({
      "title":String,
      "year":String,
      "genre":String,
      "decade": String,
      "director": String,
      "synopsis": String
  });
  
  var movie = mongoose.model("movie", movieSchema);
  app.get("/listMovieDetails",function(request, response) 
  {
    var movieName = request.query.movieName;
    movie.findOne({ title : movieName}, function(error, result) 
    {
		response.json(result);
	});
});