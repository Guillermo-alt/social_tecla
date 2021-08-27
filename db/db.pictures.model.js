const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

const Pictures = sequelize.define('pictures',{
    ic_picture:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	description: {
		type: DataTypes.STRING(40),
		allowNull: false
	},
    image: {
		type: DataTypes.STRING(30),
		allowNull: false
	}
}, {
	timestamps: true
});


module.exports = Pictures;