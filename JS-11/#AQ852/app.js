for(let i = 1 ; i < 5 ; i++){
    let hexa = '#'
    let charhexa = '0123456789abcdef'


for(let m = 0 ; m < 6 ; m++){
    hexa += charhexa[Math.floor(Math.random() *16)]
}
console.log(hexa);


}