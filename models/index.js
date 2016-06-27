var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost/tripplanner', {
  logging: true
});

var Place = db.define('Place',{
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
		type: Sequelize.STRING
		allowNull: false

	},
	location:{
		type: Sequelize.ARRAY(Sequelize.FLOAT)
		allowNull: false
	}
}

var Hotel = db.define('Hotel',{
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

var Activity = db.define('Activity',{
	name:{
		type:Sequelize.STRING,
		allowNull: false
	},
	age_range:{
		type: Sequelize.STRING,
		allowNull: false

	}
})


var Restaurant = db.define('Restaurant',{
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


Hotel.belongsTo(Place,{as : 'place'});
Restaurant.belongsTo(Place, {as: 'place'});
Activity.belongsTo(Place, {as: 'place'});



module.exports = db;
