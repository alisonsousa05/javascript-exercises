const removeFromArray = function(array) {
    let position = 0;
    for (let i=0; i<arguments.length; i++){
        for (let j=0; j<array.length; j++){    
            if (array[j]===arguments[i+1]){
                position = j;
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
