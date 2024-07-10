const fibonacci = function(num) {
    if (num == 0){
        return 0;
    }
    if(num==1 || num==2){
        return 1;
    }
    if (num < 0){
        return "OOPS";
    }
    parseInt(num);
    let numInicial1 = 1;
    let numInicial2 = 1;
    let temp = 1;
    for (let i = 3; i<=num; i++){
        temp = numInicial2;
        numInicial2 += numInicial1; 
        numInicial1 = temp;
        // 1 1 2 3 5
    }
    return numInicial2


};

// Do not edit below this line
module.exports = fibonacci;
