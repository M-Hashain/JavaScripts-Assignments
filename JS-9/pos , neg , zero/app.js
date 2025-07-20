let numbers_type = [1, -3, 0, 5, -2, 0, 7, -9];

let positive = []
let negative = []
let zero = []
for (let i = 0; i < numbers_type.length; i++) {
    if(numbers_type[i] > 0){
    positive.push(numbers_type[i])
    }
    else if(numbers_type[i] < 0){
        negative.push(numbers_type[i])
    }
    else if (numbers_type[i] === 0){
zero.push(numbers_type[i])
    }
    else{
        alert(`${numbers_type} is not invalid`);
    }
}

let posprint = positive.length
let negprint = negative.length
let zeroprint = zero.length


document.write(`Positive :`)
document.write(`${posprint}<br>`)
document.write(`Negative :`)
document.write(`${negprint}<Br>`)
document.write(`Zero :`)
document.write(`${zeroprint}<Br>`)





