
//import modules cors, midd, fetch
const controlUsers = require('../controller/controlUsers');
const middlewares = require('../../middlewares/middlewares');


module.exports = async (app)=>{

//create user
app.post('/user',/*middlewares.validateRegisterInfo ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });

 //login user
 app.post('/user/login', /*middlewares.validateLoginInfo, /*middlewares.corsOption,*/async (req, res) => {
    let user = req.body;
    try {
        const ok = await controlUsers.validateUser(user);
        if (ok) {
            let sessionToken = await controlUsers.generateUserToken(user);
            res.json(sessionToken);
        } else
            throw new Error("Invalid user, if deactivated please contact adminsitrator to reactivate it");
    } catch (error) {
        console.log('error: ' + error.message);
        res.status(400).send(error.message);
    }
});

//get user data with token
	app.get('/user', middlewares.validateToken,/*middlewares.corsOption,*/async (req, res) =>{
        try {
			let user = await controlUsers.retrieveUser(req.params.user);
			res.status(200).json(user);
        } catch (error) {
            res.status(500).json('error in the request views user or authentication fails')
        }
     });
   
//change password
app.post('/user/pass', middlewares.validateToken,/*middlewares.chamgePassInfor,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let ok = await controlUsers.updatePassword(req.body);
        if(ok===1){
            res.status(200).json('password changed !');
        }else{
            res.status(200).json('error in the request params !'); 
        }
    } catch (error) { 
        res.status(500).json('error in the request views user')
    }
 });   

 //create user
app.post('/user/skill',/*middlewares.validateRegisterInfo ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        //let user = await controlUsers.createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });

}