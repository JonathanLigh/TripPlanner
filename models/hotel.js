var Sequelize = require('sequelize');
var Place = require('./place');
var db = new Sequelize('postgres://localhost/tripplanner', {
  logging: true
});

var Hotel = db.define('hotel',{
	name:{
		type:Sequelize.STRING,
		allowNull: false
	},
	num_star:{
		type:Sequelize.INTEGER,
		allowNull: false
	},
	amenities:{
		type:Sequelize.STRING,
		allowNull: false
	}
})

Hotel.belongsTo(Place,{as : 'place'});