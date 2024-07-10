const reverseString = function(text) {
    let newString = '';
    let i = 0;
    for (const letter of text){
        newString = newString.substring(0, i) + text[text.length-i-1];
        i++;
    }
    return newString;

};


// Do not edit below this line
module.exports = reverseString;
