const express = require('express');
const bodyparser = require('body-parser');
const router  = require('./routes/movie.route');
const port = 3004;
const app = express();
const db = require('./config/db.js')



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/uploads',express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended : false}));
app.use('/',router);



app.listen(port,()=>{
    console.log('Server Start');
});