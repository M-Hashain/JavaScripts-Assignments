

 let names = ["Ali", "Ahmed", "Bilal", "Areeba", "Sara"];
 let A = []

 for(i = 0 ; i < names.length; i++){

    let letterA = names[i].slice(0,1)


    
    if(letterA.toLowerCase() === "a"){
     A.push(names[i])

    }
 }
 document.write(`${A} is started with letter A`);



