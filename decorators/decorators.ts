function logarClasse(construtor: Function): void {
    console.log(construtor);
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean): ((construtor: Function) => void) {
    return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string, b?: number }) {
    return function (_: Function): void {
        console.log(obj.a + ' ' + obj.b);
    }
}

// @logarClasse
// @decorator({ a: 'Teste', b: 123 })
// @logarClasseSe(true)
@logarObjeto
class Eletrodomestico {

    public constructor() {
        console.log('novo...');
    }

}

type Construtor = { new(...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    }
}

new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();