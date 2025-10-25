let time = new Date('5/2/2010')
let currenttime = new Date()

let agesec = currenttime - time
let age = Math.floor(agesec /(1000*60*60*24))
console.log(`Years: ${Math.floor(age/365)}`);







