var Sequelize = require('sequelize');
var Place = require('./place');
var db = require('./index')

var Hotel = db.define('hotel',{
	name:{
		type:Sequelize.STRING,
		allowNull: false
	},
	num_stars:{
		type:Sequelize.INTEGER,
		allowNull: false
	},
	amenities:{
		type:Sequelize.STRING,
		allowNull: false
	}
})

Hotel.belongsTo(Place);

module.exports = Hotel;
