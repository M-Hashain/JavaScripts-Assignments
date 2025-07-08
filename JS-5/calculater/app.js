let number1 = +prompt("Enter number 1")
let number2 = +prompt("Enter number 2")
let number3 = prompt("Enter any operator (+,-,/,*)")

if(number3 === "+"){
    console.log(number1+number2);
    
}
else if(number3 === "-"){
console.log(number1-number2);

}
else if(number3 === "/"){
console.log(number1/number2);

}
else if(number3 === "*"){
console.log(number1*number2);

}
else{
    console.log("undefined");
    
}
