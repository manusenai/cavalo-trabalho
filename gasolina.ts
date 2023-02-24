const biblioteca = require("readline-sync");
let n1: number = parseFloat(biblioteca.question("Qual o valor que voce vai oferecer? "));
let n2: number = parseFloat (biblioteca.question("Qual o valor da gasolina? "));
let div: number = n1 / n2;
console.log("Litros possiveis para voce abastecer: " + div);