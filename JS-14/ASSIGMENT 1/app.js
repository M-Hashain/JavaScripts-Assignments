let number = [1,2,3,4]
let revercenum = []

function reverce(arr){
for(let i = arr.length -1 ; i >= 0 ; i--){
revercenum[revercenum.length] = arr[i]
}
console.log(`number : ${number}`);

console.log(`reverce : ${revercenum}`);

}

reverce(number)