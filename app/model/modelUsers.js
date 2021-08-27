//import modelues
const Users = require('../../db/db.user.model');

const Hobbies = require('../../db/db.hobbies.model');
const Friendships = require('../../db/db.friendships.model');
const Languages = require('../../db/db.languages.model');
const Pictures = require('../../db/db.pictures.model');
const Skills = require('../../db/db.skills.model');
const SocialNetworks = require('../../db/db.socialNetworks.model');
const Studies = require('../../db/db.studies.model');
const ScoreHistory = require('../../db/db.scoreHistory.model');



//check if user exists
module.exports.UserExists = async (user) => {
	try {
		let exists = await Users.findOne({
			where: {
				email: user.email,
				password: user.password,
                role:  user.role,
				active: 1
			}
		});
		if (exists != null) {
			return true;
		}
		return false;
	} catch (error) {
		throw error;
	}
};

//create new user
module.exports.createUser = async (user) => {
	try {
       
		let User = await Users.create({
            userName:user.userName,
			email:user.email,
			names:user.names,
			last_names:user.last_names,
            password:user.password,
			profile_photo:user.profile_photo,
			cover_page:user.cover_page,
			date_of_birth:user.date_of_birth,
			About_me:user.About_me,
            active: 1,
            role:'user',
        });
       
		if (User != null) {
			return User;
			
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}

//create user
module.exports.retrieveUser = async (user) => {
	try {
		let User = await Users.findOne({include: [
            { model: Hobbies, as: 'hobbies'},
            {model: Skills, as: 'skills'},
            {model: Studies, as: 'studies'},
            {model: Languages, as: 'languages'},
            {model: SocialNetworks, as: 'socialNetworks'},
            {model: Pictures, as: 'pictures'},
            {model: Friendships, as: 'friendships'},
            {model: ScoreHistory, as: 'scoreHistories'}],
			where: {
				//email: 'Guiller@homail.com',
                email:user.email,
                password:user.password,
                active: 1
			}
		});
       
		if (User != null) {
			return User;
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
};

//update, change password
module.exports.updatePassword = async (user) => {
	try {
		let User = await Users.update({
			password: user.password,
		}, {
			where: {
				id_user: user.id_user,
			}
		});
       
		if (User != null) {
			return User;
			
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}