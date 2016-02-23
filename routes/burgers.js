'use strict'

var express = require('express');
var burgers = express.Router();

// placeholder to show successful route setup
var dumpMethod = (req,res)=>res.send( req.method + " burgers! // METHOD NOT IMPLEMENTED" );

// burgers route (collection)
burgers.route('/')
  // show list of burgers
  .get(dumpMethod)
  // add a burger
  .post(dumpMethod)

// single burger
burgers.route('/:burgerID')
  // view a burger
  .get(dumpMethod)
  // edit a burger
  .put(dumpMethod)
  // delete a burger
  .delete(dumpMethod)

// edit burger form
burgers.get('/:burgerID/edit', dumpMethod);

// add a new burger
burgers.post('/burgers/new', dumpMethod);


module.exports = burgers;
