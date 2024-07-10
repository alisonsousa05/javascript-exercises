const palindromes = function (text) {
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{1,}/g,"").toLowerCase();
    palindrome = '';
    for (let i=text.length - 1; i>=0; i--){
        palindrome += text[i];
    }
    if(text===palindrome){
        return true;
    }
    return false;
};
// Do not edit below this line
module.exports = palindromes;
