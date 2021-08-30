
//import modules cors, midd, fetch
const controlUsers = require('../controller/controlUsers');
const middlewares = require('../../middlewares/middlewares');
const multer = require("multer");

const upload = multer({
    dest: "/path/to/temporary/directory/to/store/uploaded/files"
  });
  




module.exports = async (app)=>{
 //create user and redirect - do not document
 app.post('/users/register/redirect',/*middlewares.validateRegisterInfo ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.createUser(req.body);
        res.redirect('/');
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });


//create user 
app.post('/users/register',/*middlewares.validateRegisterInfo ,/*middlewares.corsOption,*/async (req, res) =>{
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

 //add Skill
app.post('/user/skills',middlewares.validateToken ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.addSkill(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });

  //add studies
app.post('/user/studies',middlewares.validateToken ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.addStudies(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });

   //add languages
app.post('/user/languages',middlewares.validateToken ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.addLanguages(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });

    //add social Network
app.post('/user/social',middlewares.validateToken ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.addSocial(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });

     //add hobbies
app.post('/user/hobbies',middlewares.validateToken ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.addHobbies(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });

      //add friends
app.post('/user/friends',middlewares.validateToken ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.addFriends(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user')
    }
 });


 //get user for id
 app.get('/user/:id',middlewares.validateToken,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.retrieveUserId(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user or authentication fails')
    }
 });

 // update socore skill
 app.post('/skill/score',middlewares.validateToken ,/*middlewares.corsOption,*/async (req, res) =>{
    try {
        let user = await controlUsers.updateScore(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('error in the request views user or authentication fails')
    }
 });


// endpoints  *******************************   upload files



 //upload photo pictures and save database



 /*** */

 //upload photo profile and save database
 app.post('/upload/photo/:id_user',upload.single("img_profile"),async (req, res) => {
    try {
        let nameFile = await controlUsers.uploadImg(req,res);
        let resul = await controlUsers.updateProfilePhoto('profiles/'+nameFile,req.params.id_user)
        res.status(200).json(resul);
    } catch (error) {
        res.status(500).json('error in the request views user photo profile')
    }
    });

     //upload cover page and save database
 app.post('/upload/cover/:id_user',upload.single("cover_page"),async (req, res) => {
    try {
        let nameFile = await controlUsers.uploadImg(req,res);
        let resul = await controlUsers.updateCover('profiles/'+nameFile,req.params.id_user)
        res.status(200).json(resul);
    } catch (error) {
        res.status(500).json('error in the request views user cover')
    }
    });


}