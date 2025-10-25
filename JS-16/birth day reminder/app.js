let pastorfuturedate = new Date('5/21/2026')
let newdate = new Date('10/3/2025')


let founddayscoming = pastorfuturedate - newdate


let pastorfutureyear = pastorfuturedate.getFullYear()
let presentyear = newdate.getFullYear()

if(pastorfutureyear == presentyear){
    console.log('this bithday will come in this year');
    
}
else if(pastorfutureyear > presentyear){
    console.log(`this birth come in ${founddayscoming/(1000*60*60*24)} days`);
    
}
else{
    console.log('this birthday year is a past year');
    
}



