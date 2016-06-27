var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/tripplanner', {
  logging: true
});
var Place = require('./place');

var Activity = db.define('activity',{
	name:{
		type:Sequelize.STRING,
		allowNull: false
	},
	age_range:{
		type: Sequelize.STRING,
		allowNull: false

	}
})

Activity.belongsTo(Place, {as: 'place'});