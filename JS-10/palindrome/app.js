let word = prompt("enter a Palindrome word")

//Civic Madam Mom Rotator eifie Kayak Radar Racecar

    let reverce = word.split("").reverse().join('');

    if(word === reverce){
        document.write(" its a palindrome")
    }
    else{
        document.write(' Not a palindrome ')
    }



 