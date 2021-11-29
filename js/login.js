
var validation = document.getElementById("connexion");
var mail = document.getElementById("Email");
var passw = document.getElementById ("passwd");
var msg = document.getElementById("nonvalid");
var msg1 = document.getElementById("nonvalid1");
validation.addEventListener("click", login);
//var mailregex = /@/g;
function login(e) {
    e.preventDefault();
    if(mail.value == ""){
        msg.style.display="block";
        msg.innerHTML = "l'adresse mail est invalid";
        msg.style.color="red";
       } else if (mail.value.includes("@") == false){
        msg.style.display = "block"
        msg.innerHTML = "l'adresse mail doit contenir @ ";
        msg.style.color ="red";
    }else{
        msg.innerHTML="";
    }
    if(passw.value == ""){
        msg1.style.display="block";
        msg1.innerHTML = "le mot de passe est obligatoire";
        msg1.style.color="red";  
    }else{
        msg1.innerHTML="";
    }

    const users = JSON.parse(localStorage.getItem("users")|| []);
    const user = users.find(user => mail.value == user.email &&passw.value == user.password);
    console.log(user);
    console.log(users);
    if (user) {
    location.href = "file:///C:/Users/hrichi/Desktop/test-niveau-js/liste_tache.html";    
      }
        else{
         alert("user not find")
        }

}