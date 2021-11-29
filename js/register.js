

var validation = document.getElementById("inscrir")
var nom = document.getElementById("nom");
var prenom= document.getElementById("prenom")
var mail = document.getElementById("mail");
var password = document.getElementById("password")
var Conpassword = document.getElementById("Conpassword")
var message = document.getElementById("invalid");
var message1 = document.getElementById("invalid1");
var message2 = document.getElementById("invalid2");
var message3 = document.getElementById("invalid3");
var message4 = document.getElementById("invalid4");
var pass_valid = document.getElementById("pass_valid");
var mailregex = /@/;
var npregex = /^[a-zA-Z][a-zçèé]/
validation.addEventListener("click", register);

function register(e) {
    e.preventDefault();
    if (nom.value == ""){
        message.style.display = "block"
        message.innerHTML += "le nom est obligatoire";
        message.style.color ="red";
    }else if (npregex.test(nom.value) == false){
        message.style.display = "block"
        message.innerHTML += "La forme du nom est incorrcte";
        message.style.color ="orange";
    }else{
        message.innerHTML="";
    }
    if(prenom.value == ""){
        message1.style.display = "block"
        message1.innerHTML += "le prenom est obligatoire";
        message1.style.color ="red";
    }else if (npregex.test(prenom.value) == false){
        message1.style.display = "block"
        message1.innerHTML += "La forme du prenom est incorrcte";
        message1.style.color ="orange";
    } else{
        message1.innerHTML="";
    }
    if(mail.value == ""){
        message2.style.display = "block"
        message2.innerHTML += "l'adresse mail est invalid";
        message2.style.color ="red";
    } else if (mailregex.test(mail.value) == false){
        message2.style.display = "block"
        message2.innerHTML += "l'adresse mail doit contenir @ ";
        message2.style.color ="red";
    }else{
        message2.innerHTML="";
    }
    if(password.value == ""){
        message3.style.display = "block"
        message3.innerHTML += "le mot de passe est obligatoire";
        message3.style.color ="red";
    }else{
        message3.innerHTML="";
    }
    if(Conpassword.value == ""){
        message4.style.display = "block"
        message4.innerHTML += "la confirmation de passe est obligatoire, ou bien la confirmation est invalid";
        message4.style.color ="red";
    }
    else if (password.value == Conpassword.value) {
        pass_valid.innerHTML += "Le mot de passe est confirmer";
        pass_valid.style.color ="green";
    } else{
        pass_valid.innerHTML += "le mot de passe n'est pas correct";
        pass_valid.style.color ="orange";
    }
       
    const users = JSON.parse(localStorage.getItem("users"))||[];
    console.log(users);
      users.push({
         nom : nom.value,
         prenom : prenom.value,
         email : mail.value,
         password : password.value,
      });
      localStorage.setItem("users", JSON.stringify(users));
      return {nom, prenom, mail, password}
}