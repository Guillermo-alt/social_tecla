const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

const Friendships = sequelize.define('friendships',{
    id_friendship:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    }
}, {
	timestamps: true
});


module.exports = Friendships;