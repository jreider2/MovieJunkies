var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStategy = require('passport-local').Strategy;

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