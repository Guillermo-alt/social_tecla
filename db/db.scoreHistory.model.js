const {DataTypes} = require('sequelize');
const sequelize = require('../db/db.connection');


const ScoreHistory = sequelize.define('scoreHistory',{
    id_score:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	score: {
		type: DataTypes.INTEGER(),
		allowNull: false
	}
}, {
	timestamps: true
});



module.exports = ScoreHistory;
