const express = require('express');
const routes = express();
const movieModel = require('../models/movie.model');
const upload = require('../middleware/fileupload');
const fs = require('fs');


routes.get('/',(req, res) => {
   
        res.render('index');
   
});

routes.get('/viewMovie', async (req, res) => {
   
        let movies = await movieModel.find({});
        console.log('view movie....');

        res.render('view',{movies});
});

routes.post('/addMovie',upload.single('movieimg'),async (req, res) => {

    console.log("req file",req.file);
    console.log("req body",req.body);

    let {editId} = req.body;

    if(!editId){    

            let movie = new movieModel({
                MovieName: req.body.moviename,
                Imbd: req.body.imbd,
                Director: req.body.director,
                Stars: req.body.stars,
                movieImg:req.file ? req.file.path:''
            });

            await movie.save();
            console.log('Movie Add Sec...');
            res.redirect('/viewMovie');

        }else{
                let upadetMovie =await movieModel.updateOne({_id : editId},{
                    MovieName: req.body.moviename,
                    Imbd: req.body.imbd,
                    Director: req.body.director,
                    Stars: req.body.stars
                });
                console.log("Upadate Movie ...");
                res.redirect('/viewMovie');
            
        }
});

routes.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});


routes.get('/deleteMovie/:id', async (req, res) => {

        let { id } = req.params;


        await movieModel.deleteOne({ _id: id });

        console.log('movie deleted....');

        res.redirect('/viewMovie');
});

routes.get('/editMovie/:id', async (req, res) => {
    let  {id} = req.params;

    let singleMovie = await movieModel.findById({_id : id}); 

    console.log('movie update....');

    res.render('edit',{singleMovie});
});

module.exports = routes;
