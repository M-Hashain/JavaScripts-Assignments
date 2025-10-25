function fibonnaci(n){
let a = 0 , b = 1

if(n === 0 ) return a;
if(n === 1) return b;

for(i = 2 ; i <= n ; i++){
    let nextvalue = a+b
    a = b
    b = nextvalue
}
return b

}
console.log(fibonnaci(5));
