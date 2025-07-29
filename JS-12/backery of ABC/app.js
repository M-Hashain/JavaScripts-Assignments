let searchitems = prompt("enter a backery item what do you");


let backeryitem = ["cake", "apple pie", "cookie", "chips", "patties"]

searchitems = searchitems.toLowerCase()

if(backeryitem.includes(searchitems)){

console.log(`${searchitems} is available in our backery`);


}
else{
    console.log(`${searchitems} is not available in our backery`);
    
}