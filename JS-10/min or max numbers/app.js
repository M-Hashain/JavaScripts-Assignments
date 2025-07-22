let numbers = [12,42,52,11,24,98]
let min = numbers[0]
let max = numbers[0]

for(i = 1 ; i < numbers.length ; i++){
if(numbers[i] < min){
min = numbers[i]   
}
if(numbers[i] > max){
max = numbers[i]
}

}
 document.write("Min" + min + "<br>")
    document.write("Max" + max)