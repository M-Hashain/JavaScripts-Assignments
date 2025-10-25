let time = new Date('1/1/2026')
let todaytime = new Date()

let timesec = (time - todaytime);



console.log(`Days: ${Math.floor(timesec/(1000 * 60 * 60 * 24))+1}`);
console.log(`Hours: ${Math.floor(timesec/(1000 * 60 * 60) % 24)}`);
console.log(`Minutes: ${Math.floor(timesec/(1000 * 60) % 60)}`);
console.log(`Seconds: ${Math.floor(timesec/(1000) % 60)}`);
