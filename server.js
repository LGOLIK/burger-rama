'use strict'

var path = require('path');
var express = require('express');
var logger = require('morgan');
var request = require('request');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require('./db/pg');
var burgerRoutes = require( path.join(__dirname, '/routes/burgers'));

// app settings
var app = express();
var port = process.env.PORT || 3000;

// log
app.use(logger('dev'));

// parse incoming forms
/* we'll be reading the form body,
but not accepting files, or anything more than text*/
app.use( bodyParser.urlencoded({ extended: false }));
/* we'll convert everything we receive into json,
for our convenience */
app.use( bodyParser.json());

// override with POST having ?_method=XXXX
/* e.g. If we need to make a PUT,
we'll POST to a url appended with ?_method=put */
app.use(methodOverride('_method'));

// public route for css
app.use(express.static('./public/'));

app.set('views', './views');
app.set('view engine', 'ejs');


// routes

// home page
app.get('/', (req, res) => res.render('pages/home'));

// Burgers
app.use('/burgers', burgerRoutes);


var server = app.listen(port, () => console.log('Server is up!'));
