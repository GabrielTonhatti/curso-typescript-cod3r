class Data {
    // Público por padrão
    dia: number;
    public mes: number;
    ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data; // posso omitir os parâmetros
casamento.ano = 2017;
console.log(casamento);

class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) { }

}

const aniversarioEsperto = new Data(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new Data; // posso omitir os parâmetros
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

// Desafio Classe Produto
// Atributos: nome, preco, desconto
// Criar o contrutor
// Obs 1. : Desconto é opcional (valor padrão 0)
// Obs 2. : Criar dois produtos: passando dois e três parâmetros

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) { }

    // Criar método: precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto
    public precoComDesconto(): number {
        return this.preco * (1 - this.desconto);
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }

}

const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1.resumo());

const prod2 = new Produto('Caderno Escolar', 18.80, 0.15);
console.log(prod2.resumo());

class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) { }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }

}

const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());

// simular "erros"
// carro1.velocidadeAtual = 300;
// console.log(`Atual -> ${carro1.velocidadeAtual}`);

// carro1.velocidadeMaxima = 500;
// console.log(`Maxima -> ${carro1.velocidadeMaxima}`);

// carro1.alterarVelocidade(150);
// console.log(`Atual -> ${carro1.velocidadeAtual}`);

class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima);
    }

    public acelerar(): number {
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-15);
    }

}

const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());

// Getters e Setters
class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        if (idade >= 0 && idade <= 120) {
            this._idade = idade;
        }
    }

}

const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1);

// Atributos e métodos estáticos
class Matematica {
    public static PI: number = 3.1416;

    public static areaCirc(raio: number): number {
        return Matematica.PI * (raio ** 2);
    }
}

// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));

// const m2 = new Matematica();
// console.log(m2.areaCirc(4));

// console.log(new Matematica().areaCirc(4));
console.log(Matematica.areaCirc(4));

// Classes abstrata
abstract class Calculo {
    protected resultado: number = 0;

    public abstract executar(...numeros: number[]): void;

    public getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {

    public executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a);
    }

}

class Multiplicacao extends Calculo {

    public executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a);
    }

}

let c1: Calculo = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

class Unico {
    private static instance: Unico = new Unico();

    private constructor() { }

    public static getInstance(): Unico {
        return Unico.instance;
    }

    public agora(): Date {
        return new Date();
    }
}

// const errado = new Unico();
console.log(Unico.getInstance().agora());

// Somente leitura
class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo;
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'PT-DEF';
console.log(turboHelice);
