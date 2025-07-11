let time = +prompt("Enter a time in 24 hours e.g(1900 = 7pm)")

if(time > 0 && time <= 1200){
console.log("good morning");

}
else if(time > 1200 && time <= 1700){
console.log("good after noon");

}
else if(time > 1700 && time <= 2100){
console.log("good evening");

}
else if(time > 2100 && time <= 2359){
console.log("good night");

}
else{
console.log("invalid time plz enter time between 0 to 2359");

}