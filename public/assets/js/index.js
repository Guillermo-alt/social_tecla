
class ProfileUser {
    constructor (data,token) {
        this.data = data
        this.token=token
    }
    
    //get data user
   async getDataUser(){
    document.getElementById('userName').innerHTML  = this.data.userName;
    document.getElementById('profile_photo').src  = '/assets/img/'+this.data.profile_photo;
    document.getElementById('fullname').innerHTML  = this.data.names+" "+this.data.last_names;
    document.getElementById('email').innerHTML  = this.data.email;
    document.getElementById('date').innerHTML  = this.data.date_of_birth;
    document.getElementById('phone').innerHTML  = this.data.phone;
    document.getElementById('address').innerHTML  = this.data.address;
    var cover = document.getElementById("body");                                          
    cover.style.backgroundImage =  `url("/assets/img/${this.data.cover_page}")`;

    //get skills
    for(let s in  this.data.skills){
       let skillList= document.getElementById('skillList')
       let h6 = document.createElement('h6')
        h6.innerHTML=this.data.skills[s].name
       let div = document.createElement('div')
       div.classList.add("progress")
       div.classList.add("mb-3")
       let div2 = document.createElement('div')
       div2.classList.add("progress-bar")
       div2.style.width = `${this.data.skills[s].score.toFixed(2)}%`
       let h4 = document.createElement('h6')
       h4.innerHTML =`${this.data.skills[s].score.toFixed(2)}%`
       let button = document.createElement('button') 
       button.classList.add("btn")
       button.classList.add("btn-success")
       button.classList.add("offset-10")
       button.textContent="cali"

       skillList.appendChild(h6)
       div.appendChild(div2)
       div.appendChild(h4);
       skillList.appendChild(div)
    }

    //get socialNetworks
    for(let n in  this.data.socialNetworks){
        let listSocial= document.getElementById('listSocial')
        let li = document.createElement('li')
        li.classList.add("list-group-item")
        let a = document.createElement('a')
        a.setAttribute('href',this.data.socialNetworks[n].newtwork);
        a.setAttribute('target','_blank');
        a.appendChild(document.createTextNode(this.data.socialNetworks[n].newtwork))
        li.appendChild(a);
        listSocial.appendChild(li)
     
    }

    //get studies
    for(let i in  this.data.studies){
        let studieList= document.getElementById('studieList')
        let li = document.createElement('li')
        li.classList.add("list-group-item")
        let h6 = document.createElement('h6')
        h6.innerHTML =`${this.data.studies[i].period}`
        let p = document.createElement('p')
        p.innerHTML =`${this.data.studies[i].institution}`
        li.appendChild(h6)
        li.appendChild(p)
        studieList.appendChild(li)

    }
      //get languages
      for(let i in  this.data.languages){
        let studieList= document.getElementById('listaLanguages')
        let li = document.createElement('li')
        li.classList.add("list-group-item")
        let h6 = document.createElement('h6')
        h6.innerHTML =`${this.data.languages[i].name}`
        let p = document.createElement('p')
        p.innerHTML =`Level ${this.data.languages[i].level}`
        li.appendChild(h6)
        li.appendChild(p)
        studieList.appendChild(li)

    }
     //get Hobbies
     for(let i in  this.data.hobbies){
        let studieList= document.getElementById('listHobbies')
        let li = document.createElement('li')
        li.classList.add("list-group-item")
        let h6 = document.createElement('h6')
        h6.innerHTML =`${this.data.hobbies[i].name}`
        let p = document.createElement('p')
        p.innerHTML =`Level ${this.data.hobbies[i].description}`
        li.appendChild(h6)
        li.appendChild(p)
        studieList.appendChild(li)
    }
     //get friends
     let dataSession=  await JSON.parse(sessionStorage.getItem('dataSession'))
     for(let f in  this.data.friendships){
        let resulUser = await fetch(`http://localhost:3000/user/${ this.data.friendships[f].id_user_friend}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  dataSession.token
            }})
        const dataUser = await resulUser.json();

        let listSocial= document.getElementById('friendsList')
        let li = document.createElement('li')
        li.classList.add("list-group-item")
        let a = document.createElement('a')
        a.setAttribute('href',`http://127.0.0.1:3000/profile?id_user=${dataUser.id_user}`,);
        a.appendChild(document.createTextNode(dataUser.userName))
        li.appendChild(a);
        listSocial.appendChild(li)
    }
}

   
    async changepassword(){

        let pass1 = document.getElementById('pass1').value;
        let pass2 = document.getElementById('pass2').value;
    
        var noValido = /\s/;
    
        if( (!noValido.test(pass1) && !noValido.test(pass2)) && ( pass2 != '' && pass1 != '') &&(pass2===pass1)){
           try {
            let resultado = await fetch('http://127.0.0.1:3000/user/pass', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  this.token
            },
            body: JSON.stringify({
                "id_user": this.data.id_user,
                "password" : pass1,
            })
        })
          if(resultado){sessionStorage.clear();alert('password changed'); location.href ="./"; }
        } catch (error) {
            console.log(error)
        }  
        }else{
           alert('password no valido');
        }    
    }

    async updatePhotoProfile(){
        if(document.getElementById('img_profile').value != '0')
        document.getElementById('formUpload').setAttribute('action', `http://127.0.0.1:3000/upload/photo/${this.data.id_user}`)
      
        document.getElementById('formUpload').submit()
    }

    async updateCoverPage(){
        if(document.getElementById('cover_page').value != '0')
        document.getElementById('formUploadcover').setAttribute('action', `http://127.0.0.1:3000/upload/cover/${this.data.id_user}`)
      
        document.getElementById('formUploadcover').submit()
    }

    async addSkill(skill){
        try {
            let resultado = await fetch('http://localhost:3000/user/skills', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  this.token
            },
            body: JSON.stringify({
                "nameSkill": skill,
                "id_user" : this.data.id_user,
            })
        })
          if(resultado){alert('skill added'); location.href ="./"; }
        } catch (error) {
            console.log(error)
        } 
    }

    async addSocial(newtwork){
        try {
            let resultado = await fetch('http://localhost:3000/user/social', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  this.token
            },
            body: JSON.stringify({
                "newtwork": newtwork,
                "id_user" : this.data.id_user,
            })
        })
          if(resultado){alert('social newtwork added'); location.href ="./"; }
        } catch (error) {
            console.log(error)
        } 
    }

    async addStudies(studies, period){
        try {
            let resultado = await fetch('http://localhost:3000/user/studies', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  this.token
            },
            body: JSON.stringify({
                "institution": studies,
                "period": period,
                "id_user" : this.data.id_user,
            })
        })
          if(resultado){alert('studies added'); location.href ="./"; }
        } catch (error) {
            console.log(error)
        }  
    }
    

}

//objet ProfileUser global
var user;


window.onload = async function (){
   try {
    let dataSession=  await JSON.parse(sessionStorage.getItem('dataSession'))
    if (sessionStorage['dataSession'] && dataSession.role==="user"){
       try {
       let result = await fetch('http://localhost:3000/user', {
        method: 'get',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + dataSession.token
          }
    })
    const data = await result.json();
    
    user = new ProfileUser(data,dataSession.token)
    user.getDataUser()


    } catch (error) {
       console.log(error)     
    }
    }else{
        location.href = '/login.html'
    }} catch (error) {  
        console.log(error)   
    } 
}


//close session
let logout = document.getElementById('logout');

logout.addEventListener('click', async ()=>{
    var opcion = confirm("Desea salir?");
    if (opcion == true) {
		sessionStorage.clear(); 
		location.href = '/login.html'
	}
});

//change password
let changePass = document.getElementById('changePass');

changePass.addEventListener('click', async ()=>{
    user.changepassword();

});


//upload photo_profile
document.getElementById('sendFormUplaod').addEventListener('click', (e) => {
	e.preventDefault()
    user.updatePhotoProfile()
  
  });
//upload cover
  document.getElementById('sendFormUplaodcover').addEventListener('click', (e) => {
	e.preventDefault()
    user.updateCoverPage()
  
  });

  //add Skill
  document.getElementById('addSkill').addEventListener('click', (e) => {
    user.addSkill( document.getElementById('skill').value)
  
  });
//add social
  document.getElementById('addSocial').addEventListener('click', (e) => {
    user.addSocial( document.getElementById('social').value)
  
  });

  //add studies
  document.getElementById('addStudies').addEventListener('click', (e) => {
    user.addStudies( document.getElementById('studies').value,document.getElementById('period').value)
    
  
  });



