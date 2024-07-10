const add = function(a, b) {
    return a+b;
};

const subtract = function(a, b) {
  return a-b;
	
};

const sum = function(list) {
	let soma = 0;
  for (number of list){
    soma+=number;
  }
  return soma;
};

const multiply = function(list) {
  let valor = 1;
  for (number of list){
    valor*=number;
  }
  return valor;

};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  let soma = 1;
  for(let i=2; i<=a;i++){
    soma *= i;
  }
  return soma;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
