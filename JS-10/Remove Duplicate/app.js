let char = [1,2,3,4,2,5,3,6,8,3,7,8,9.9,6,9,10];
let charunique = [1,2,3,4,5,6,7,8,9,10]
let charunique2 = []

for(i = 0 ; i < char.length ; i++){
 if(charunique.includes(char[i]) && !charunique2.includes(char[i])){
    charunique2.push(char[i])
 }
}
document.write(charunique2);


