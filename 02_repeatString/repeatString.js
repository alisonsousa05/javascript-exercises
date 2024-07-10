const repeatString = function(text, num) {
    if (num===0){
        return "";
    }
    if (num<0){
        return "ERROR";
    }
    let originalText = text;
    for (let i=1; i<num; i++){
        text = text + originalText;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
