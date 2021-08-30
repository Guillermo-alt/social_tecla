
class ProfileUser {
    constructor (data,token) {
        this.data = data
        this.token=token
    }
    //get data user
    getDataUser(){
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
       div2.style.width = `${this.data.skills[s].score}%`
       let h4 = document.createElement('h6')
       h4.innerHTML =`${this.data.skills[s].score}%`
       let button = document.createElement('button') 
       button.classList.add("btn")
       button.classList.add("btn-success")
       button.classList.add("offset-10")
       button.textContent="cali"

       skillList.appendChild(h6)
       div.appendChild(h4)
       div.appendChild(div2);
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
        console.log('asd')
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
}

}

//objet ProfileUser global
var userProfile;
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
    const dataUs = await result.json();
    
    //new profileUser
    user = new ProfileUser(dataUs,dataSession.token)


    //search params url user_id
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id_user = urlParams.get('id_user');
    
    let resulProfile = await fetch(`http://localhost:3000/user/${id_user}`, {
        method: 'get',
    })
    //parse json
    const data = await resulProfile.json();
    
    //new profileUser
    userProfile = new ProfileUser(data,dataSession.token)
    userProfile.getDataUser()

    
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


//add friends
let addFriend = document.getElementById('addFriend');

addFriend.addEventListener('click', async ()=>{
    var opcion = confirm("want to add friend?");
    if (opcion == true) {
        try {
            let resultado = await fetch('http://localhost:3000/user/friends', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +  user.token
            },
            body: JSON.stringify({
                "id_user_friend":  userProfile.data.id_user,
                "id_user" : user.data.id_user,
            })
        })
          if(resultado){alert('friend added'); }
        } catch (error) {
            console.log(error)
        } 
      
	}
});




