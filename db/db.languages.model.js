const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

const Languages = sequelize.define('languages',{
    id_lenguage:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	name: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
    level: {
		type: DataTypes.STRING(10),
		allowNull: false
	}
}, {
	timestamps: true
});


module.exports = Languages;
