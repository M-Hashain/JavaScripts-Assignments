let word = "mam"

function palindrome(str){
for(let i = 0 ; i < str.length ; i++){
if(str[i] === str[str.length -1]){
console.log("palindrome");
return;
}
console.log("not palindrome");
return;

}


}

palindrome(word)