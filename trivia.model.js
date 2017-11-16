var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var triviaSchema = new Schema

({
    movie:
    {
        type: String,
        required: true,
        unique: true,
    },
    genre:
    {
        type: String,
        required: true,
        unique: true,
    },
    decade:
    {
        type: String,
        required: true,
    },
    question1:
    {
        type: String,
        required: true,
    },
    answer1:
    [{
        type: String,
        required: true,
    }],
    question2:
    {
        type: String,
        required: true,
    },
    answer2:
    [{
        type: String,
        required: true,
    }],
    question3:
    {
        type: String,
        required: true,
    },
    answer3:
    [{
        type: String,
        required: true,
    }],
    question4:
    {
        type: String,
        required: true,
    },
    answer4:
    [{
        type: String,
        required: true,
    }],
    question5:
    {
        type: String,
        required: true,
    },
    answer5:
    [{
        type: String,
        required: true,
    }],
  
});

var Trivia = module.exports = mongoose.model('Trivia', triviaSchema)