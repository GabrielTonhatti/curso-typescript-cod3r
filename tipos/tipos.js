"use strict";
// string
let nome = "João"; // Tipo é inferido pelo compilador quando não é especificado
console.log(nome);
// nome = 28;
// numbers
let idade = 27;
// idade = 'Ana';
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27';
// array
let hobbies = ["Cozinhas", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 1260, "Bloco A"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    // return minhaIdade;
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
    // return minhaIdade;
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'));
console.log(multiplicar(4.7, 9));
// Tipo função
let calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// Objetos
let usuario = {
    nome: "João",
    idade: 27,
};
console.log(usuario);
// usuario = {};
// usuario = {
// name: "Maria",
// age: 31,
// };
usuario = {
    idade: 31,
    nome: "Maria",
};
console.log(usuario);
/** Desafio
 * Criar um objeto funcionário com:
 *  - Array de strings com os nomes dos supervisores
 *  - Função de bater ponto que recebe a hora (número) e retorna uma string
 *      -> Ponto ndebug ormal (<= 8)
 *      -> Fora do horário (> 8)
 */
let funcionario = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(horas) {
        if (horas <= 8) {
            return "Ponto normal";
        }
        return "Fora do horário";
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// funcionario = {};
