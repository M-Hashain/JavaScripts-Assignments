let number = [1,2,3,1,4,2]


function findduplicate(arr){
    let find = {}
    let duplicate = []
for(i = 0 ; i < arr.length ; i++){
if(find[arr[i]]){
    duplicate.push(arr[i])
    
}
else{
    find[arr[i]] = true
}

}
console.log(duplicate);


}
findduplicate(number)