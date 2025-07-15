let color = ['red','brown','blue'];
let newcolor1 = prompt("enter any color in start");


color.unshift (newcolor1);

let newcolor2 = prompt("enter any color in last");
color.push(newcolor2);

let newcolor3 = prompt("enter any color in start");
color.unshift(newcolor3);


let newcolor4 = prompt("enter any color in start");
color.unshift(newcolor4);



let newcolor5 = alert("we delete your 4th color")
color.shift(newcolor5);


let newcolor6 = alert("we delete your 2nd color")
color.pop(newcolor6);

let index = prompt("which index do you want to add");
let colors = prompt("enter any color");
 color.splice(index,0,colors)


let del = +prompt("Which index you want to delete?");
let howmanycolor = +prompt("How many colors you want to delete?")
color.splice(del,howmanycolor);
document.write(`<b> how many ${howmanycolor} color(s) from index ${del}:</b> ${color} \n`)








