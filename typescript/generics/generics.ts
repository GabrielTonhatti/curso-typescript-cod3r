function echo(objeto: any): any {
    return objeto;
}

console.log(echo("João").length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto;
}

console.log(echoMelhorado("João").length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5');
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]): void {
    args.forEach((element: T) => console.log(element));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Ana', 'Bia', 'Carlos']);
imprimir<{ nome: string, idade: number }>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);

type Aluno = { nome: string, idade: number };
imprimir<Aluno>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);

// Tipo Genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>('Alguma coisa'));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) { }

    public abstract executar(): R;
}

// console.log(new OperacaoBinaria("Bom", "dia").executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, "Opa").executar());
// console.log(new OperacaoBinaria({}, {}).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {

    public getTime(data: Data): number {
        let { dia, mes, ano } = data;

        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

    public executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;

        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }

}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 5, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());

// Desafio Classe Fila
// Atributos: fila (array)
// Métodos: entrar, proximo, imprimir

class Fila<T extends number | string> {
    private fila: Array<T>;

    public constructor(...args: Array<T>) {
        this.fila = args;
    }

    public entrar(elemento: T): void {
        this.fila.push(elemento);
    }

    public proximo(): T | null {
        if (this.fila.length > 0) {
            const primerio: T = this.fila[0];
            this.fila.splice(0, 1);
            return primerio;
        }

        return null;
    }

    public imprimir(): void {
        console.log(this.fila);
    }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();

const novaFila = new Fila<number>(1, 2, 3);
novaFila.imprimir();

// const outraFila = new Fila<boolean>(true, false);

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = { chave: C, valor: V };
class Mapa<C, V> {
    private _itens: Array<Par<C, V>>;

    public constructor() {
        this._itens = [];
    }

    public obter(chave: C): Par<C, V> | null {
        const resultado: Array<Par<C, V>> = this._itens
            .filter((item: Par<C, V>): boolean => item.chave === chave);

        return resultado ? resultado[0] : null;
    }

    public colocar(item: Par<C, V>): void {
        const encontrado: Par<C, V> | null = this.obter(item.chave);

        if (encontrado) {
            encontrado.valor = item.valor;
        } else {
            this._itens.push(item);
        }
    }

    public limpar(): void {
        this._itens = new Array<Par<C, V>>();
    }

    public imprimir(): void {
        console.log(this._itens);
    }

}

const mapa: Mapa<number, string> = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.imprimir();
mapa.limpar();
mapa.imprimir();