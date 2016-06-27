var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');

var Promise = require('bluebird');
var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function(req, res, next){
	var everything = {};
	Hotel.findAll({})
	.then(function(dbHotels){
		everything.dbHotels = dbHotels;
		return Restaurant.findAll({});
	})
	.then(function(dbRestaurants){
		everything.dbRestaurants = dbRestaurants;
		return Activity.findAll({});
	})
	.then(function(dbActivity){
		res.send(everything)
	})
	.catch(next);
})


module.exports = router;