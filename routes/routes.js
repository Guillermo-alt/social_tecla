//import the modules to use
const fetch = require('node-fetch');


module.exports = async (app) => {

    app.get('/', async (req, res) =>{ //index, datos de perfil usuario propio
        try {
             res.render("index")
        } catch (error) {
            res.status(500).json('error in the request rutes social_tecla ')
        }
     });

     app.get('/teclers/:id_user', async (req, res) =>{ //visualiza datos de perfile solicitado (otros perfiles)
        try {
            // res.render("teclers")
        } catch (error) {
            res.status(500).json('error in the request rutes social_tecla')
        }
     });

}


