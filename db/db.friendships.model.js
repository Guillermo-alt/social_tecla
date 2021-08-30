const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

const Friendships = sequelize.define('friendships',{
    id_friendship:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
    id_user_friend:{
        type: DataTypes.INTEGER(),
		allowNull: false
    }
}, {
	timestamps: true
});


module.exports = Friendships;