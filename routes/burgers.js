'use strict'

var express = require('express');
var burgers = express.Router();

// placeholder to show successful route setup
var dumpMethod = (req,res)=>res.send( req.method + " burgers! // METHOD NOT IMPLEMENTED" );

// burger data array - will later be replaced with db
var burgerData = [];

// burgers route (collection)
burgers.route('/')
  // show list of burgers
  .get((req, res) => res.send({data: burgerData}))
  // add a burger
  .post((req,res) => {
  	// insert our new burger into the collection
  	burgerData.push(req.body);

  	// redirect to the new item (in a db, you'd return the new id)
  	var newID = burgerData.length-1;
    // res.send(burgerData);
  	res.redirect('./'+ newID);
  })

// single burger
burgers.route('/:burgerID')
  // view a burger
  .get((req,res)=>{
    var bID = req.params.burgerID;
    // if there is not a burger at position :burgerID, throw a non-specific error
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }
    res.send({data: burgerData[bID]})
  })
  // edit a burger
  .put(dumpMethod)
  // delete a burger
  .delete(dumpMethod)

// edit burger form
burgers.get('/:burgerID/edit', dumpMethod);

// add a new burger
burgers.post('/new', dumpMethod);


module.exports = burgers;
