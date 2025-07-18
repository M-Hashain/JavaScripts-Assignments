//NUMBERS :

let number = [1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15];
 
document.write("Counting: <br><br>")
for(let i = 0 ; i < number.length;i++){
    document.write(` ${number[i]},`)
}



//REVERCE-COUNTING :

let reverce_counting = [0,1,2,3,4,5,6,7,8,9,10];
document.write(`<br><br><br>`)
document.write("Reverce-Counting: <br><br>")

 for(let i = reverce_counting.length -1; i > 0 ; i--){
     document.write(` ${reverce_counting[i]},`)

 }

 //EVEN NUMBERS :

 let even = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 document.write(`<br><br>`)
 document.write(`Even-Numbers : <br><br>`)
 for(let i = 0 ; i <= 20 ; i += 2){
    document.write(i + ", ")
 }



  //ODD NUMBERS :

 let odd = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 document.write(`<br><br>`)
 document.write(`Odd-Numbers : <br><br>`)
 for(let i = 1 ; i <= 20 ; i += 2){
    document.write(i + ", ")
 }



 //SERIES :

 let series = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 document.write(`<br><br>`)
 document.write(`Series : <br><br>`)
 for(let i = 2 ; i <= 20 ; i += 2){
    document.write(i + "K, ")
 }


