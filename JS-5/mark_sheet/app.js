

// yourmarks = value
// percentage = obtain/total *100
// Grade = 
// document.write(`<h2>${value}</h2>`)
 let value1 = +prompt("enter 1 value")
  let value2 = +prompt("enter 2 value")
   let value3 = +prompt("enter 3 value")

   let total  = 300
   let obtain  =  value1 + value2 + value3
   let percentage = (obtain / total)*100

   if(percentage >= 80){
    var grade= "grade A-One"
    var remarks =" excellent"
   
   }
   else if(percentage >= 70){
    var grade= "grade A"
     var remarks ="good"
     
    
   }
    else if(percentage >= 60){
     var grade= "grade B"
      var remarks ="you need to improve"
   }
   else{
    var grade= "fail"
    var remarks ="sorry"
   
    
   }
   document.write(`total marks:${total}<br></br>`)
    document.write(`obtain:${value1 + value2 + value3} <br></br>`)
   document.write(`GRADE:${grade}<br></br>`)
   document.write(`percentage:${(obtain / total)*100}%<br></br>`)
   document.write(`remarks:${remarks}<br></br>`)
  