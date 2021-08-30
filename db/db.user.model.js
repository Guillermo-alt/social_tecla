const {DataTypes} = require('sequelize');
const sequelize = require('../db/db.connection');
const Studies = require('../db/db.studies.model');
const Languages = require('../db/db.languages.model');
const Skills = require('../db/db.skills.model');
const Hobbies = require('../db/db.hobbies.model');
const SocialNetworks = require('../db/db.socialNetworks.model');
const Pictures = require('../db/db.pictures.model');
const Friendships = require('../db/db.friendships.model');


const Users = sequelize.define('users',{
    id_user:{
        type:DataTypes.INTEGER(),
        primaryKey:true,
        autoIncrement:true
    },
	userName: {
		type: DataTypes.STRING(30),
		allowNull: false
	},
	email: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	names: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
    last_names: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	password: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	profile_photo: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
    cover_page: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	date_of_birth: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
    About_me: {
		type: DataTypes.STRING(200),
		allowNull: false
	},
	address: {
		type: DataTypes.STRING(100),
		allowNull: false
	},
	phone: {
		type: DataTypes.STRING(20),
		allowNull: false
	},
	active: {
		type: DataTypes.INTEGER(),
		allowNull: false
	},
	role: {
		type: DataTypes.STRING(10),
		allowNull: false
	}
}, {
	timestamps: true
});





Users.hasMany(Studies, { foreignKey: 'id_user', constraints: true, onDelete: 'cascade',onUpdate: 'cascade' })

Users.hasMany(Languages, { foreignKey: 'id_user', constraints: true, onDelete: 'cascade',onUpdate: 'cascade' })

Users.hasMany(Hobbies, { foreignKey: 'id_user', constraints: true, onDelete: 'cascade',onUpdate: 'cascade' })

Users.hasMany(Skills, { foreignKey: 'id_user' })

Users.hasMany(SocialNetworks, { foreignKey: 'id_user', constraints: true, onDelete: 'cascade',onUpdate: 'cascade' })

Users.hasMany(Pictures, { foreignKey: 'id_user', constraints: true, onDelete: 'cascade',onUpdate: 'cascade' })

Users.hasMany(Friendships, { foreignKey: 'id_user', constraints: true, onDelete: 'cascade',onUpdate: 'cascade' })



module.exports = Users;
