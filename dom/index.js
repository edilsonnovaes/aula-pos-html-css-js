function soma(numero1, numero2) {
  return numero1 + numero2;
}

// var total = soma(8, 9);

// console.log(total);


const novaSoma = function soma(numero1, numero2) {
  return numero1 + numero2;
}

// var total = novaSoma(5, 2);

// console.log(total);


const somaArrowFunction = (numero1, numero2) => numero1 + numero2

var total = somaArrowFunction(1,2);

// console.log(total);


let obj = {};
obj.nome = "Edilson";
obj.idade = 20;
obj.soma = function soma(numero1, numero2) {
              return numero1 + numero2;
            };
obj.somaIdade = function soma(valor) {
  this.idade += new Number(valor)
};


var total = obj.soma(5, 10);

console.log(total);
console.log(obj);
