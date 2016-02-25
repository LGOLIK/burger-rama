'use strict'

var express = require('express');
var burgers = express.Router();

// placeholder to show successful route setup
var dumpMethod = (req,res)=>res.send( req.method + " burgers! // METHOD NOT IMPLEMENTED" );

// burger data array - will later be replaced with db
var burgerData = [];

// burgers route (collection)
burgers.route('/')
/*burger homepage*/
  .get((req,res)=>{
    res.render('pages/burger_all',{data:burgerData })
  })
  /*create a new burger*/
  .post((req,res)=>{
  	// insert our new burger into the collection
  	burgerData.push(req.body)
    console.log('req.body is' + req.body);

  	// redirect to the new item (in a db, you'd return the new id)
  	var newID = burgerData.length-1;
  	res.redirect('./'+ newID)
  })

/* show create burger form*/
burgers.get('/new', (req,res)=>
	res.render('pages/burger_edit', {
    burgerForm:{
      title:'Create your Dream Burger',
      burgerURL:'/burgers/',
      submitMethod:'post'
    }
  })
)

// single burgers
burgers.route('/:burgerID')
	.get((req,res)=>{
    var bID = req.params.burgerID;
    // if there is not a burger at position :burgerID, throw a non-specific error
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }
    res.render('pages/burger_one', {
      burgerID:bID,
      burgerURL:'/burgers/'+bID,
      burgerData: burgerData[bID]})
  })
  /*one burger update*/
  .put((req,res)=>{
    var bID = req.params.burgerID;
    // if we don't have a burger there, let's
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }

    // replace the burger at :burgerID position
    burgerData[bID] = req.body;

    // redirect to the new burger
    res.redirect(303, './' + bID)
  })
  // delete a burger
  .delete((req,res)=>{
    var bID = req.params.burgerID;
    console.log('delete', req.body)
    // if we don't have a burger there, send 404
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }

    // remove the burger from the array
    burgerData.splice(burgerData[bID], 1);

    // redirect to burgers
    res.redirect(303, './');
  })
  // end of single burger

  /*show edit form for one burger*/
  burgers.get('/:burgerID/edit', (req,res)=>
  	res.render('pages/burger_edit', {
      burgerForm:{
        title:'Edit your Dream Burger',
        burgerURL:'/burgers/' + req.params.burgerID + '?_method=PUT',
        submitMethod:'post'
      }
    })
  )

module.exports = burgers;
