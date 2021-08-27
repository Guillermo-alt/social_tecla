

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
    const dataUser = await result.json();
    //document.getElementById('nameUser').textContent = dataUser.names ;
    //document.getElementById('gmailUser').textContent  =dataUser.email ;
    //document.getElementById('phone').textContent  =dataUser.phone_number ;

    } catch (error) {
       console.log(error)     
    }
    }else{
        location.href = '/login.html'
    }} catch (error) {  
        console.log(error)   
    } 
}


