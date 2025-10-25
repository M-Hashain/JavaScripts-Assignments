let number = [3,1,5,9,2]

function maxmin(arr){
    let maxnum = arr[0]
    let minnum = arr[0]

    for(i = 1 ; i < arr.length ;i++ ){
        if(arr[i] > maxnum){
            maxnum = arr[i]
        }
        if(arr[i] < minnum){
            minnum = arr[i]
        }
     
        
    }
       console.log(`Max ${maxnum} Min ${minnum}`);
}

maxmin(number)



