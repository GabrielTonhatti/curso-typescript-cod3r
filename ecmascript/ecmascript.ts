// let & const
let seraQuePode = '?';
console.log(seraQuePode);
// var seraQuePode = '?'; // hoisting

let estaFrio = true;

if (estaFrio) {
    let acao = 'Colocar casaco';
    console.log(acao);
}

const cpf: string = '123.456.000-99';
// cpf = '789.101.132-78';
console.log(cpf);

var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();

console.log(segredo);

{
    {
        const def = 'def';
        console.log(def);
    }
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i);

// Arrow Function
const somar = function (n1: number, n2: number): number {
    return n1 + n2;
}

console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2, 3));

const saudacao = () => console.log("Olá");
saudacao();

const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("João");

// this
// function normalComThis() {
//     console.log(this);
// }
// normalComThis();

// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
// normalComThisEspecial();

// // this???
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();

// const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' });
// arrowComThisEspecial();

// Parâmetros padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}

contagemRegressiva();
contagemRegressiva(3);

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers)); // Spread

const turmaA: Array<string> = ['João', 'Maria', 'Fernanda'];
const turmaB: Array<string> = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);

function retornarArray(...args: number[]): Array<number> {
    return args; // Rest
}

const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray(...numbers));

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
    // console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);

// Destructuring (Array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

// const [w, z] = [2, 3];

// Destructuring (Objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};

const nomeItem = item.nome;
const precoItem = item.preco;
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
console.log(nomeItem);
console.log(precoItem);

const usuarioId: string = 'SuporteCod3r';
const notificacoes: string = '9';
// const boasVindas = 'Boas vindas ' + usuarioId + 'Notificações: ' + notificacoes;
const boasVindas = `
    Boas vindas ${usuarioId},
    Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);

// Desafio

// 1)
const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

// 2)
const dizerOla = (nome: string = 'Pessoa'): void => console.log("Ola, " + nome);

dizerOla();
dizerOla("Anna");

// 3)
const nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums));

// 4)
const array: number[] = [55, 20];
array.push(...nums);
console.log(array);

// 5)
const notas: number[] = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

// 6)
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);

// Callback
function esperar3s(callback: (dado: string) => void): void {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}

// esperar3s(function (resultado: string) {
//     console.log(resultado);
// });

function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois promise...');
        }, 3000);
    });
}

// esperar3sPromise().then(dado => console.log(dado));

// fetch('https://swapi.dev/api/people/1')
//     .then((res: Response) => res.json())
//     .then((personagem => personagem.films))
//     .then((films: string[]) => fetch(films[0]))
//     .then((resFilme: Response) => resFilme.json())
//     .then((filme: any) => console.log(filme.title))
//     .catch(err => console.log(`Cacth: ${err}`));
