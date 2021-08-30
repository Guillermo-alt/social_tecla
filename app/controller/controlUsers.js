const modelUsers = require ('../model/modelUsers');
const jwt = require('jsonwebtoken');

const path = require("path");
const fs = require("fs");

const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };
  
  

//validate if user exists
module.exports.validateUser = async (usr) => {
	try {
		const ok = await modelUsers.UserExists(usr);
		if (ok) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		throw error;
	}
};

//generate token
module.exports.generateUserToken = async (user) => {
	const token = jwt.sign(
		{ data: user },
		process.env.SECRET_KEY
	);
	return token;
};

//create new user
module.exports.createUser = async (user) => {
	try {
        const result = await modelUsers.createUser(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
};

//get user data with token
module.exports.retrieveUser = async (user) =>{
    try {
        const result = await modelUsers.retrieveUser(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//get user for id
module.exports.retrieveUserId = async (id) =>{
    try {
        const result = await modelUsers.retrieveUserId(id);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//verify user token
module.exports.verifyUserToken = async (token) => {
	try {
		const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
		if (decodedUser) {
			return decodedUser;
		}
	} catch (error) {
		throw error;
	}
};

//change password
module.exports.updatePassword = async (user) =>{
    try {
        const result = await modelUsers.updatePassword(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

module.exports.uploadImg = async (req,res) =>{
    try {
		const tempPath = req.file.path;
		
		const targetPath = path.join(__dirname, "../../public/assets/img/profiles/"+req.file.originalname);
		
		  let aux =path.extname(req.file.originalname).toLowerCase();
	
		if (aux === ".png" || aux ===".jpg") {
		  fs.rename(tempPath, targetPath, err => {
			if (err) return handleError(err, res);
			res
			  .status(200)
			  .redirect('/');

		  });
		  return req.file.originalname;
		} else {
		  fs.unlink(tempPath, err => {
			if (err) return handleError(err, res);
	
			res
			  .status(403)
			  .contentType("text/plain")
			  .end("Only .png and jpg files are allowed!");
		  });
		}

    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//update  profilePhoto
module.exports.updateProfilePhoto = async (img,user) =>{
    try {
        const result = await modelUsers.updateProfilePhoto(img,user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//update  cover page
module.exports.updateCover = async (img,user) =>{
    try {
        const result = await modelUsers.updateCover(img,user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//update  add skill
module.exports.addSkill = async (user) =>{
    try {
        const result = await modelUsers.addSkill(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//update  add studies
module.exports.addStudies = async (user) =>{
    try {
        const result = await modelUsers.addStudies(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//update  add Languages
module.exports.addLanguages = async (user) =>{
    try {
        const result = await modelUsers.addLanguages(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//update  add social network
module.exports.addSocial = async (user) =>{
    try {
        const result = await modelUsers.addSocial(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//update  add Hobbies
module.exports.addHobbies = async (user) =>{
    try {
        const result = await modelUsers.addHobbies(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

//update  add friends
module.exports.addFriends = async (user) =>{
    try {
        const result = await modelUsers.addFriends(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}
//update  socore
module.exports.updateScore = async (user) =>{
    try {
        const result = await modelUsers.updateScore(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}