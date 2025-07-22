
let sentence =  "hello world";

let word = sentence.split(" ");

let last = ""

let up = [];

for(i = 0 ; i < word.length; i++){
    
let element  = word[i]

let slice = element.slice(0,1);

let upper = slice.toUpperCase( )

let mix = element.replace(slice,upper)

up.push(mix);

}
last = up.join(" ")

document.write(last)


