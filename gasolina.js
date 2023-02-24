var biblioteca = require("readline-sync");
var n1 = parseFloat(biblioteca.question("Qual o valor do pagamento? "));
var n2 = parseFloat(biblioteca.question("Qual o valor da gasolina? "));
var div = n1 / n2;
console.log("Litros possiveis para voce abastecer: " + div);
