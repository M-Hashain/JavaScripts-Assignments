 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//is working because after ++a value already changes and become 5 so 5===5 and alert is shown




 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//is not working because after b++ value doesnt changes and still remain 82 so 82===83 which is not correct hence alert is not shown



var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
//is it not working because c++ is not changes and still remain 12 so 12 === 13 is not correct so alert doesnt show



if (c === 13){
alert("condition 2 is true");
}
// this logic is correct because in line 19 c++ already update c from 12 to 13 hence 13===1 condition 2 is correct



if (++c < 14){
alert("condition 3 is true");
}
//this condition is false because ++c make c = 14 and line num 33 says 14 is less than 14 so alert doesnt show 




if(c === 14){
alert("condition 4 is true");
}
//it is correct because c is equal to 14 on line no 33 so 14===14 so this one was correct



 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//yes this one is correct because materialCost = 20000  laborCost = 2000  total cost = 22000 so 22000 = 22000 so this one is correct

true //constaant 


 if (true){
alert("True");
}
// always run as it is constantly true forever until condition changes


if (false){
alert("False");
}

// never run as it is constantly false forever until condition changes

if("car" < "cat"){
alert("car is smaller than cat");
}
//if says car is less then cat  so show the alert 


