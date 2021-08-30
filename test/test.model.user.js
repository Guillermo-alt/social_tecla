const expect = require('chai').expect;
const modelsUsers = require('../app/model/modelUsers');

//Declarar los testeos que vamos a realizar

describe('Given a user object', () => {
	let user = {
        id_user:1004,
        userName:"Guiller",
        email:"guiller@hotmail.com",
        names:"Guillermo",
        last_names:"Ortega Vargas",
        password:"pass",
        date_of_birth:"1994/05/28",
        phone:"5558109026",
        address:"Fresnos 2 Las cruces CDMX México",
        role:"user",
        About_me:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sapiente repellat vero libero dolor ex nam, "
	};

    let skill ={
            nameSkill:"Sql server",
            id_user:"1"
     };
     let studies = {
        institution:"Universidad Autónoma Metropolitana Cuajimalpa",
        period:"2017-2021",
        id_user:"1"
    };
    let scoreSkill ={
        id_skill:"1",
        score:"20"
    };

    let socialNet ={
    newtwork:"https://github.com/Guillermo-alt",
    id_user:"1"
    };


	describe('with missing id_user, email or password field', async () => {
		it('should get error when passing by createUser function', async () => {
			try {
				let result = await modelsUsers.createUser(user);
			} catch (error) {
				expect(error.message).to.be.equals('WHERE parameter "user.params" has invalid "undefined" value');
			}
		});
        it('should get error when passing by retrieveUser function', async () => {
			try {
				let result = await modelsUsers.retrieveUser(user);
			} catch (error) {
				expect(error.message).to.be.equals('WHERE parameter "id_user" has invalid "undefined" value');
			}
		});
        it('should get error when passing by UserExists function', async () => {
			try {
				let result = await modelsUsers.UserExists(user);
			} catch (error) {
				expect(error.message).to.be.equals('WHERE parameter "id_user" has invalid "undefined" value');
			}
		});
        it('should get error when passing by updatePassword function', async () => {
			try {
				let result = await modelsUsers.updatePassword(user);
			} catch (error) {
				expect(error.message).to.be.equals('WHERE parameter "id_user" has invalid "undefined" value');
			}
		});
        it('should get error when passing by addSkill function', async () => {
			try {
				let result = await modelsUsers.addSkill(skill);
			} catch (error) {
				expect(error.message).to.be.equals('WHERE parameter "id_user" or nameSkill has invalid "undefined" value');
			}
		});
        it('should get error when passing by addStudies function', async () => {
			try {
				let result = await modelsUsers.addStudies(studies);
			} catch (error) {
				expect(error.message).to.be.equals('WHERE parameter "id_user" has invalid "undefined" value');
			}
		});
        it('should get error when passing by addSocial function', async () => {
			try {
				let result = await modelsUsers.addSocial(socialNet);
			} catch (error) {
				expect(error.message).to.be.equals('WHERE parameter "id_user" has invalid "undefined" value');
			}
		});
        it('should get error when passing by updateScore skill function', async () => {
			try {
				let result = await modelsUsers.updateScore(scoreSkill);
			} catch (error) {
				expect(error.message).to.be.equals('WHERE parameter "id_skill" has invalid "undefined" value');
			}
		});

	});
});