let ages = [5, 12, 17, 25, 35, 65, 80];

for(let i = 0 ; i < ages.length; i++){
    if(ages[i] <= 13){
        document.write(`child : ${ages[i]}<Br>`);
    }
    else if(ages[i] <= 20  ){
document.write(`teen : ${ages[i]} <Br>`)
    }
     else if(ages[i] <= 60  ){
document.write(`adult : ${ages[i]}<br>`)
    }
    else{
document.write(`senior : ${ages[i]}<Br>`)
    }
}