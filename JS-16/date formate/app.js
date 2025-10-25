let time = new Date('10/2/2025')

function fulltime(str){
    let weeks = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
 let day = weeks[time.getDay()]
 let date = time.getDate()
 let month = months[time.getMonth()] 
 let year = time.getFullYear()
    console.log(`${day}/${date} ${month}/${year}`);
}
    
fulltime(time)

