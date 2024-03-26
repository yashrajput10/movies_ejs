const mongoose = require('mongoose');
const { path } = require('../routes/movie.route');

const movieSchema = new mongoose.Schema({

    MovieName:String,
    Imbd:Number,
    Director:String,
    Stars:String,
    movieImg:String
    
});

const movieModel = mongoose.model('moviecollection',movieSchema);

module.exports = movieModel;