let num1 = +prompt("enter num one");
let num2 = +prompt("enter num two");
let operator = prompt("enter a operator(+ - * /);");


if (num2 == ""){
    console.log("enter val first");
    
}

else{
    if(operator === "+"){
console.log(num1 + num2);

}
else if(operator === "-"){
console.log(num1 - num2);

}
else if(operator === "*"){
console.log(num1 * num2);

}
else if(operator === "/"){
console.log(num1 / num2);

}
else{
    console.log("Error");  
}

}
