const {DataTypes} = require('sequelize');
const sequelize = require('../db/db.connection');

const Skills = sequelize.define('skills',{
    id_skill:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	name: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
    score: {
		type: DataTypes.FLOAT(),
		allowNull: false
	},
    totalUserScore: {
		type: DataTypes.INTEGER(),
		allowNull: false
	}
}, {
	timestamps: true
});


module.exports = Skills;

