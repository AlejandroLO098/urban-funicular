let vowelCHecker = function(x) {
    
    if(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x =='u') {
        console.log(`${x} is a vowel`)
    } else if (x == 'y') {
        console.log(`${x} is sometimes a vowel`)
    } else {
        console.log(`${x} is not a vowel.`)
    }
}

vowelCHecker('d');
vowelCHecker('i');
vowelCHecker('f');
