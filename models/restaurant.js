var Sequelize = require('sequelize');
var Place = require('./place');
var db = new Sequelize('postgres://localhost/tripplanner', {
  logging: true
});


var Restaurant = db.define('restaurant',{
	name:{
		type:Sequelize.STRING,
		allowNull: false
	},
	cuisine:{
		type:Sequelize.STRING,
		allowNull: false
	},
	price:{
		type:Sequelize.INTEGER,
		allowNull: false
	}
})

Restaurant.belongsTo(Place, {as: 'place'});