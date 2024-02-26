function validateEmail(){
    let emailInput=document.getElementById("email").value;
    console.log(emailInput);
    if(emailInput === ""){
        alert ("please enter email address")
    }
}
