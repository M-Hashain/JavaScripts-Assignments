// let bakery= ['apple','applepie','cookie','chipps','patties'];

// let order = prompt("welcome to abc bakery what do you want to order sir") //apple


// let lenght = bakery.includes(order)//true



// console.log(lenght)


// if (lenght == true){

//     let show_item= bakery.indexOf(order)
//         document.write(`${bakery[show_item]} is available at index ${show_item}`)
// }









 let bakery= ['apple','applepie','cookie','chipps','patties'];

let order = prompt("welcome to abc bakery what do you want to order sir")

let found = false;

for(let i = 0 ; i < bakery.length ; i++){

if(order === bakery[i]){

document.write(order +"is available at index " +  i + "in our bakery");

found = true;
break;


}

}

if(!found){
document.write(order + "is not available in our bakery")
}






