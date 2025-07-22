let numbers = [1,2,3,4,5,6,7,8,9,10];

let even = []
let odd =  []

for(i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 === 0 ){
        even.push(numbers[i])
    }
    if(numbers[i] % 2 === 1){
        odd.push(numbers[i])
    }
}

document.write("Even :" +even + "<br>")
document.write("Odd :" +odd )