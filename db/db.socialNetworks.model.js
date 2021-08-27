const {DataTypes} = require('sequelize');
const sequelize = require('../db/db.connection');

const SocialNetworks = sequelize.define('socialNetworks',{
    id_newtwork:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	newtwork: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
    favicon: {
		type: DataTypes.STRING(30),
		allowNull: false
	}
}, {
	timestamps: true
});


module.exports = SocialNetworks;
