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

// parse incoming forms
app.use( bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json());

// log
app.use(logger('dev'));

// public route for css
app.use( express.static( path.join( __dirname, 'public' )));

app.set('views', './views');
app.set('view engine', 'ejs');


// routes

// home page
app.get('/', (req, res) => res.render('pages/home'));

// Burgers
app.use('/burgers', burgerRoutes);


var server = app.listen(port, () => console.log('Server is up!'));
