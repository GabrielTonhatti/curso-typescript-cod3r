interface Humano {
    nome: string;
    idade?: number;
    [prop: string]: any;
    saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano): void {
    console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano): void {
    pessoa.nome = 'Joana';
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 });
pessoa.saudar('Skywalker');

// Usando Classes...
class Cliente implements Humano {
    public nome: string = '';
    public ultimaCompra: Date = new Date();

    public saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }

}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number;
}

let potencia: FuncaoCalculo;
potencia = function (base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a);
}

console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);

// Herança
interface A {
    a(): void;
}

interface B {
    b(): void;
}

interface ABC extends A, B {
    c(): void;
}

class RealA implements A {
    public a(): void { }
}

class RealAB implements A, B {
    public a(): void { }
    public b(): void { }
}

class RealABC implements ABC {
    public a(): void { }
    public b(): void { }
    public c(): void { }
}

abstract class AbstrataABD implements A, B {
    public a(): void { }
    public b(): void { }
    public abstract d(): void;
}

interface Object {
    log(): void;
}

Object.prototype.log = function () {
    console.log(this.toString());
}

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
    nome: 'Pedro',
    toString(): string {
        return this.nome;
    }
};

cli.log();