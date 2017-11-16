var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var movieSchema = new Schema
({
    title:
    {
        type: String,
        required: true,
        unique: true,
    },
    year:
    {
        type: String,
        required: true,
        unique: true,
    },
    genre:
    {
        type: String,
        required: true,
    },
    decade:
    {
        type: String,
        required: true,
    },
    director:
    {
        type: String,
        required: true,
    },
    synopsis:
    {
        type: String,
        required: true,
    }
});

var Movie = module.exports = mongoose.model('Movie', movieSchema)