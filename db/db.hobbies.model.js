const {DataTypes} = require('sequelize');
const sequelize = require('../db/db.connection');

const Hobbies = sequelize.define('hobbies',{
    id_hobbie:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	name: {
		type: DataTypes.STRING(20),
		allowNull: false
	},
    description: {
		type: DataTypes.STRING(50),
		allowNull: false
	}
}, {
	timestamps: true
});


module.exports = Hobbies;
