var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPass = document.getElementById('userPass');
var correct = document.getElementById('correct')
var succe = document.getElementById('succe')

var Login = document.getElementById('Login');
var container = []
var  containerUser =[]

if(localStorage.getItem('User-Name') == null)
{
    containerUser = []
}
else
{
   
    containerUser =JSON.parse(localStorage.getItem('User-Name'))
}

   

console.log(containerUser);



if(localStorage.getItem('User-info') == null)
{
    container = []
}
else
{
   
    container =JSON.parse(localStorage.getItem('User-info'))
}

function getUserInfo() {
    let counter = 0;
for(let i = 0; i < container.length; i++)
{
    if(container[i].email === userEmail.value)
    {
        counter++;
    }
}
if(counter !== 0)
{
    succe.classList.replace('d-none','d-block')
    succe.innerHTML= 'email is duplicated'
    
}
else{
    var UserInfo =
    {
        name: userName.value,
        email: userEmail.value,
        pass: userPass.value
    }
    container.push(UserInfo)
    localStorage.setItem('User-info', JSON.stringify(container))
    console.log(container);
    succe.classList.replace('d-none','d-block')
}

    
}


function login()
{
var logUserName = document.getElementById('logUserName');
var logUserPass = document.getElementById('logUserPass');

for( var i=0 ; i<container.length; i++ ) 
{
    if(logUserName.value == container[i].email && logUserPass.value == container[i].pass )
    {
       location.href = 'welcome.html'

      var UserNameSave = 
      {
        UserNameSaveOP:container[i].name
      }
      containerUser.push(UserNameSave)
      localStorage.setItem('User-Name',JSON.stringify(containerUser))
      
    
       correct.classList.replace('d-block','d-none')
    }
    
    else
    {
       
        correct.classList.replace('d-none','d-block')
    }
}
}
for( var i=0 ; i<containerUser.length ; i++ )
{
    document.getElementById('Welcome').innerHTML = containerUser[i].UserNameSaveOP
}


userEmail.onblur=alert('wow')



