let char = prompt("enter a single character")

let ascii = char.charCodeAt(0);

if(ascii >= 48 && ascii <= 57){
console.log("you enter a number");

}
else if(ascii >= 65 && ascii <=90){
    console.log("you enter a UPPER CASE");
    
}
else if(ascii >= 97 && ascii <=122){
    console.log("you enter a lower case");
    
}
else{
    console.log("error");
    
}