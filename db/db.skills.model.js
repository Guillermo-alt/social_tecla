const {DataTypes} = require('sequelize');
const sequelize = require('../db/db.connection');
const ScoreHistory = require('../db/db.scoreHistory.model');

const Skills = sequelize.define('skills',{
    id_skill:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	name: {
		type: DataTypes.STRING(30),
		allowNull: false
	}
}, {
	timestamps: true
});

Skills.hasMany(ScoreHistory, { foreignKey: 'id_skill', constraints: true, onDelete: 'cascade',onUpdate: 'cascade' })

module.exports = Skills;

