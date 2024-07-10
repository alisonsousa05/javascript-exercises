function min(a, b){
    if (a<=b){
        return a;
    }
    else{
        return b;
    }
}
function max(a, b){
    if(a>=b){
        return a;
    }
    else{
        return b;
    }
}
const sumAll = function(num1, num2) {
    if(num1<0 || num2<0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let soma = 0;
    for (let i=min(num1, num2); i<=max(num1,num2);i++){
        soma += i;
    }
    return soma;


};

// Do not edit below this line
module.exports = sumAll;
