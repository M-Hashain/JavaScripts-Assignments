let number = +prompt("Enter a number:");

let prime = true;
if(number <= 1){
prime = false;
}
else{
    for(let i = 2 ; i < number ; i++){
        if(number % i === 0){
prime = false;
break ;
        }
    }
}

if(prime){
    document.write(`${number} is a prime number`);
}
else{
      document.write(`${number} is not a prime number`);
}




