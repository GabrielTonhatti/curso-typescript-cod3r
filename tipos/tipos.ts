// string
let nome: string = "João"; // Tipo é inferido pelo compilador quando não é especificado
console.log(nome);
// nome = 28;

// numbers
let idade: number = 27;
// idade = 'Ana';
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27';

// array
let hobbies: any[] = ["Cozinhas", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua importante", 1260, "Bloco A"];
console.log(endereco);

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 1
    Azul = 10, // 2
    Laranja,
    Amarelo,
    Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

// funções
function retornaMeuNome(): string {
    // return minhaIdade;
    return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
    console.log("Oi");
    // return minhaIdade;
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

// console.log(multiplicar(2, 'Bia'));
console.log(multiplicar(4.7, 9));

// Tipo função
let calculo: (x: number, y: number) => number;
// calculo = digaOi;
// calculo();

calculo = multiplicar;
console.log(calculo(5, 6));

// Objetos
let usuario: { nome: string; idade: number } = {
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

let funcionario: {
    supervisores: Array<string>;
    baterPonto: (horas: number) => string;
} = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(horas: number): string {
        if (horas <= 8) {
            return "Ponto normal";
        }
    
        return "Fora do horário";
    }    
};

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// funcionario = {};