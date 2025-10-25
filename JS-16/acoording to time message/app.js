let date = new Date()
let Timesetting = date.getHours() 


if(Timesetting >= 5 && Timesetting < 12){
    console.log("good morning");
    
}
else if(Timesetting >= 12 && Timesetting < 17){
    console.log("Good afternoon");
    
}
else if(Timesetting >= 17 && Timesetting < 21){
    console.log("Good evening");
    
}
else{
    console.log("good night");
    
}





