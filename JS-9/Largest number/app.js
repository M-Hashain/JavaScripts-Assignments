let number = [2, 88, 45, 67, 100, 5];
let large = number[0]
for(let i = 1 ; i < number.length; i++){
    if(number[i] > large){
        large = number[i]
    }
}
document.write("output :" + large)