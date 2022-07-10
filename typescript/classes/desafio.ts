// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0;

    public constructor(public nome: string) {
    }

    public buzinar(): void {
        console.log('Toooooooooot!');
    }

    public acelerar(delta: number): void {
        this.velocidade = this.velocidade + delta;
    }
}

const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - Herança
abstract class Objeto2D {

    public constructor(
        public base: number = 0,
        public altura: number = 0
    ) { }

    public abstract area(): number;

}

class Retangulo extends Objeto2D {

    public override area(): number {
        return this.base * this.altura;
    }
}

const retangulo: Objeto2D = new Retangulo(5, 7);
retangulo.base = 10;
// retangulo.altura = 7;
console.log(retangulo.area());

// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = '';

    get primeiroNome(): string {
        return this._primeiroNome;
    }

    set primeiroNome(valor: string) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        } else {
            this._primeiroNome = '';
        }
    }
}

const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
