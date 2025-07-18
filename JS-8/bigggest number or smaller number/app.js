document.write("Array_item :24, 53, 78, 91, 12<br>")
let number = [24, 53, 78, 91, 12];
let larger = number[1]
for(let i = 0; i < number.length;i++){
    if(number[i] > larger){
        larger = number[i]
      
    }
}
  document.write(`the largest number is :${larger}<br><bR>`)



  document.write("Array_item :24, 53, 78, 91, 12<br>")
  let number2 = [24, 53, 78, 91, 12];
  let smaller = number[1]
  for(let i = 0;i < number2.length;i++){
    if(number2[i] < smaller){
        smaller = number[i]
    }
    
  }

  document.write("the smallest number is : "+ smaller )
  
