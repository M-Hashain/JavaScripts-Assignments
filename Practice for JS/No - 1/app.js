

let firstnumber = document.getElementById('fnum')
let secondnumber = document.getElementById('snum')
let operators = document.getElementById('operator')

function enter(){
let operator = operators.value;
let num1 = +firstnumber.value;
let num2 = +secondnumber.value;
let resultofcalculator;

if(operator == '+'){
    resultofcalculator = num1 + num2

}
else if(  operator == '-'){
  resultofcalculator = num1 - num2
}
else if(  operator == '*'){
  resultofcalculator = num1 * num2
}
else if(  operator == '/'){
  resultofcalculator = num1 / num2
}
else if(  operator == '**'){
  resultofcalculator = num1** num2
}
else if(  operator == '%'){
  resultofcalculator = num1%num2
}
else{
    alert('invalid input only number or operators')
}
document.getElementById('resultofcalculator').textContent = `Result : ${resultofcalculator}`
}



