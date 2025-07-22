let names = ['Hasnain' ,'Alisan ','Ali' ,'Hassan'];
let search = "has"

let lower = search.toLowerCase();

let result = []

for(i = 0 ; i < names.length ; i++){
    let newname = names[i].toLowerCase();
    if(newname.includes(lower)){
        result.push(names[i])
    }
}

document.write(result);


