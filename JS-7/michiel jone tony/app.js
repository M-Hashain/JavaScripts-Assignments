let students =['michiel','jonh','tony'];
let scores = [320 , 230 , 480];

total = 500;
 for(var i = 0; i < students.length; i++){

    let student = students[i];
    let score = scores[i];

percentage = (score/total)*100

document.write(`score of ${student} is ${score} percentage: ${percentage} % <br><br>`)





 }

