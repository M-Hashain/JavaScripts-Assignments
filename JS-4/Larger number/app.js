let first = +prompt("enter your first number");
let second = +prompt("enter your second number");
let third = +prompt("enter your third number");

 if( first === second && second === third) {
    console.log("all are equal");
}
else if(first >= second && first >= third){
console.log("first number is larger");

}
else if(second >= first && second >= third){
console.log("second number is larger");

}
else if(third >= first && third >= second){
console.log("third number is larger");

}
else if( first === second && second === third) {
    console.log("all are equal");
    
}
else{
    console.log("please only enter numbers");
    
}
