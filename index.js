var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStategy = require('passport-local').Strategy;
//the decalrations bellow are needed for google authentication 
var GoogleAuth = require('google-auth-library');
var CLIENT_ID = "332330513278-7uboe8hl0v0cdnan6orf83opb3p29j9m.apps.googleusercontent.com";
var auth = new GoogleAuth;
var client = new auth.OAuth2(CLIENT_ID, '', '');

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });


var server_port = 3000;

app.use(express.static(__dirname + '/public'));

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
    res.sendFile(__dirname + '/views/horrorPage.html');
});
app.listen(server_port, function() {
    console.log("Listening on port : " + server_port);
});



//this was a test post route. not important. 
app.post("/examplePost", function(req, res) {
    //store new object in req.body
    //var newNote = req.body;
    //push new note to JSON
    //notes["travelNotes"].push(newNote);
    //return simple JSON object
    // res.json({
    //   "message": "post complete to server !!",
    //   "test": req.body
    // });
    res.send("Message") 
    //msg to terminal 
    console.log("Routing to examplePost post request reached.")
});

app.post("/sendToken", function(req, res) {  

    //somehow I need to make a post request to the google server
    //in order to authenticate 

    //here are my attempts 
    //(before I realized jquery doesn't work on backend)

    // var tokenInfoEndpointURL = "https://www.googleapis.com/oauth2/v3/tokeninfo?" + req;
    // $.get( tokenInfoEndpointURL, function( data ) {
    //     //deal with return JSON from google
    //     console.log(data);
    // });

    // $.post("https://www.googleapis.com/oauth2/v3/tokeninfo", {id_token: req}, function (response) {
    //     console.log("server post response returned..." + response);
    // });

    console.log("req = " + req.body); //troubleshooting 
    res.send("R"); //sending a resonse 
    console.log("Routing to testPost post request reached!");
    
});