let password = prompt("enter a password");

if(password.length >= 6){
    console.log("yes its 6 letter valid password");
    
}
else{
    console.log("no its not 6 letter invalid password");
    
}
let passletter = /[a-zA-Z]/.test(password)
let numbers = /[0-9]/.test(password)
if(passletter && numbers){
    console.log("valid password contain number or letter");
    
}
else{
console.log("invalid passwword its missing letter or number");

}
let firstchar = password.charAt(0)

if(isNaN(firstchar)){
    console.log("valid password your first letter is not a number");
    
}
else{
    console.log("invalid password your first letter is a number ");
    
}