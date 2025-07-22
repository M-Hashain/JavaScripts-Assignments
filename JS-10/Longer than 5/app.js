let sent = "hi there's is a proffesional friend ";

let word = sent.split(" ")

let result = []

for(i = 0 ; i < word.length; i++){
    if(word[i].length >= 5  ){
     result.push(word[i])
    }
}
document.write(result)