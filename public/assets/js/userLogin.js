class usuario {
    constructor (Usuario, pass) {
        this.email = Usuario
        this.pass = pass
        this.token = ''
        this.role = 'user'
    }

    static async guardaUsuario (Usuario) {
        sessionStorage.setItem('dataSession', JSON.stringify(Usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(sessionStorage.getItem('dataSession'))
        return resultado
    }
}


let Sign_in = document.getElementById('Sign_in')

//Logica para trabajar
//Login
Sign_in.addEventListener('click', async ()=> {


    usuario.guardaUsuario(new usuario (document.getElementById('email').value,document.getElementById('pass').value))
    
    try {
    
        let data = await usuario.recuperaUsuario()
        
        let resultado = await fetch('http://localhost:3000/user/login', {
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, */*",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": data.email,
                "password" :data.pass,
                "role" : data.role
            })
        })
            
        let datosVuelta = await resultado.json()
        data.token = datosVuelta
        usuario.guardaUsuario(data)
        
        if (resultado.status === 200){
            location.href ="./";
        }
    
    } catch (error) {
        console.log(error)
        alert(error+': email or password incorrect')
    }

})
