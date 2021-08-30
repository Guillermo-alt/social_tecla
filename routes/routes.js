const fetch = require('node-fetch');


module.exports = async (app) => {

    app.get('/', async (req, res) =>{ //index, datos de perfil usuario propio
        try {
             res.render("index")
        } catch (error) {
            res.status(500).json('error in the request rutes social_tecla ')
        }
     });

     app.get('/profile', async (req, res) =>{ //visualiza datos de perfile solicitado (otros perfiles)
        try {
            let result = await fetch (`http://localhost:3000/user/${req.query.id_user}`,{method: 'get'})
            res.render("profile")
        } catch (error) {
            res.status(500).json(error+'error in the request rutes social_tecla')
        }
     });

    
}








