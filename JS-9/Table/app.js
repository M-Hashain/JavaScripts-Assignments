let number = +prompt("enter a number for table ");
let length = +prompt("enter a table length");

document.write("TABLE :"+"<BR><br>")
for(i = 1 ; i <= length ; i++){
    document.write(`${number} x ${i} = ${number * i} <Br>`)
}