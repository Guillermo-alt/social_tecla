/** Import required modules */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./db/db.connection');
const Users = require('./db/db.user.model');
const Studies = require('./db/db.studies.model');
const Languages = require('./db/db.languages.model');
const Skills = require('./db/db.skills.model');
const Hobbies = require('./db/db.hobbies.model');
const SocialNetworks = require('./db/db.socialNetworks.model');
const Pictures = require('./db/db.pictures.model');
const Friendships = require('./db/db.friendships.model');

const middlewares = require('./middlewares/middlewares');

const viewUsers =  require ('./app/view/view.users');
const viewsRutes = require('./routes/routes');

//Utilice middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**Global middlewares config */

app.use(cors());
app.use(express.json());
//app.use(middlewares.limiter);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/*Start server */
async function startServer(){
    try {
        await Users.sync({ alter: true });
        await Studies.sync({ alter: true });
        await Languages.sync({ alter: true });
        await Hobbies.sync({ alter: true }); 
        await SocialNetworks.sync({alter:true}); 
        await Skills.sync({ alter: true }); 
        await Pictures.sync({alter:true}); 
        await Friendships.sync({alter:true}); 
       
        await db.authenticate();//connect to data base
        console.log('Conected to Database'); 
        app.listen(process.env.PORT, process.env.HOST, () =>{   //connect to server
            console.log(`Server started at http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Conection to Database failed: ' + error.message);
    }
}

startServer();

/** Start API routes */
viewUsers(app);
viewsRutes(app);
