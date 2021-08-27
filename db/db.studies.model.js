const {DataTypes} = require('sequelize');
const sequelize = require('../db/db.connection');

const Studies = sequelize.define('studies',{
    id_studies:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	institution: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
    period: {
		type: DataTypes.STRING(30),
		allowNull: false
	}
}, {
	timestamps: true
});


module.exports = Studies;
