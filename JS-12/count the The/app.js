let text = 'The quick brown fox jumps over the lazy dog'

text = text.toLowerCase()

let sentence = text.split(" ")

let count = 0
for(let i = 0 ; i < sentence.length ; i++){
if(sentence[i] === 'the'){
    count++;
   
}


}
 document.write(`text :${text}<br>`)
 document.write(`there are ${count} occurrences of word 'the'`)