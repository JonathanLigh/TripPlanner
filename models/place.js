var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/tripplanner', {
  logging: true
});

var Place = db.define('place',{
	address:{
		type: Sequelize.TEXT,
		allowNull: false
	},
	city:{
		type: Sequelize.STRING,
		allowNull: false

	},
	state:{
		type: Sequelize.STRING,
		allowNull: false

	},
	phone:{
		type: Sequelize.STRING,
		allowNull: false

	},
	location:{
		type: Sequelize.ARRAY(Sequelize.FLOAT),
		allowNull: false
	}
}






module.exports = db;
