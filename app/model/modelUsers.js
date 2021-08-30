//import modelues
const Users = require('../../db/db.user.model');

const Hobbies = require('../../db/db.hobbies.model');
const Friendships = require('../../db/db.friendships.model');
const Languages = require('../../db/db.languages.model');
const Pictures = require('../../db/db.pictures.model');
const Skills = require('../../db/db.skills.model');
const SocialNetworks = require('../../db/db.socialNetworks.model');
const Studies = require('../../db/db.studies.model');




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
			profile_photo:'default/defaulProfile.png',
			cover_page:'default/defaultCover.png',
			date_of_birth:user.date_of_birth,
			About_me:user.About_me,
			phone:user.phone,
			address:user.address,
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

//create user with token
module.exports.retrieveUser = async (user) => {
	try {
		let User = await Users.findOne({include: [
            { model: Hobbies, as: 'hobbies'},
            {model: Skills, as: 'skills'},
            {model: Studies, as: 'studies'},
            {model: Languages, as: 'languages'},
            {model: SocialNetworks, as: 'socialNetworks'},
            {model: Pictures, as: 'pictures'},
            {model: Friendships, as: 'friendships'}],
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

//create user for id
module.exports.retrieveUserId = async (id_user) => {
	try {
		let User = await Users.findOne({include: [
            { model: Hobbies, as: 'hobbies'},
            {model: Skills, as: 'skills'},
            {model: Studies, as: 'studies'},
            {model: Languages, as: 'languages'},
            {model: SocialNetworks, as: 'socialNetworks'},
            {model: Pictures, as: 'pictures'},
            {model: Friendships, as: 'friendships'}],
			where: {
                id_user:id_user,

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

//update, update ProfilePhoto
module.exports.updateProfilePhoto = async (img,user) => {
	try {
		let User = await Users.update({
			profile_photo: img,
		}, {
			where: {
				id_user: user,
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

//update, update cover page
module.exports.updateCover = async (img,user) => {
	try {
		let User = await Users.update({
			cover_page: img,
		}, {
			where: {
				id_user: user,
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

//update, add skill
module.exports.addSkill = async (user) => {
	try {
		let Skill = await Skills.create({
            name:user.nameSkill,
			id_user:user.id_user,
			totalUserScore:0,
			score:10

        });
		if (Skill != null) {
			return Skill;		
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}

//update, add studies
module.exports.addStudies = async (user) => {
	try {
		let Studie = await Studies.create({
            institution:user.institution,
			period:user.period,
			id_user:user.id_user
        });
		if (Studie != null) {
			return Studie;		
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}

//update, add Languages
module.exports.addLanguages = async (user) => {
	try {
		let Language = await Languages.create({
            name:user.name,
			level:user.level,
			id_user:user.id_user
        });
		if (Language != null) {
			return Language;		
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}
//update, add social network
module.exports.addSocial = async (user) => {
	try {
		let SocialNetwork = await SocialNetworks.create({
            newtwork:user.newtwork,
			id_user:user.id_user
        });
		if (SocialNetwork != null) {
			return SocialNetwork;		
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}
//update, add Hobbies
module.exports.addHobbies = async (user) => {
	try {
		let Hobbie = await Hobbies.create({
            name:user.name,
			description:user.description,
			id_user:user.id_user
        });
		if (Hobbie != null) {
			return Hobbie;		
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}
//update, add friend
module.exports.addFriends = async (user) => {
	try {

		let exists = await Users.findOne({
			where: {
				id_user: user.id_user_friend,
			}
		});
		if (exists != null) {
			try {
			let friend = await Friendships.create({
				id_user_friend:user.id_user_friend,
				id_user:user.id_user
			});
			if (friend != null) {
				return friend;		
			}
		} catch (error) {
			console.log(error)
			throw new Error('User or id_user_friend  no  exists or is inactive');	
		}
		}		
		
	} catch (error) {
        console.log(error)
		throw new Error('User or id_user_friend  no  exists or is inactive');
	}
}
//update, update score skill -- average
module.exports.updateScore = async (body) => {
	try {
		let Sskill = await Skills.findOne({
			where: {
				id_skill: body.id_skill
			}
		});

		let Skill = await Skills.update({
			score: (parseFloat(body.score) + parseFloat(Sskill.score)/(parseFloat(Sskill.totalUserScore)+1) ),
			totalUserScore: Sskill.totalUserScore +1
		}, {
			where: {
				id_skill: body.id_skill 
			}
		});
       
		if (Skill != null) {
			return {
                "score": body.score,
                "id_skill" : body.id_skill
            }
			
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}
