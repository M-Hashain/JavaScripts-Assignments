let word = "Banana"
let object= {}

function count(str){
for(i = 0 ; i < str.length ; i++){
if(object[str[i]]){
    object[str[i]] = object[str[i]] +1
   
}
else{
    object[str[i]] =1
}
}

console.log(object);

}

count(word)