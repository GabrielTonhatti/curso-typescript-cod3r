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

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

interface Eletrodomestico {
    imprimir?(): void;
}

// @logarClasse
// @decorator({ a: 'Teste', b: 123 })
// @logarClasseSe(true)
// @logarObjeto
// @imprimivel
class Eletrodomestico {

    public constructor() {
        console.log('novo...');
    }

}

function imprimivel(construtor: Function): void {
    construtor.prototype.imprimir = function (): void {
        console.log(this);
    }
}

// (<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmin
type Usuario = {
    nome: string,
    email: string,
    admin: boolean
}

const usuarioLogado: Usuario = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    public critico(): void {
        console.log('Algo crítico foi alterado!');
    }
}

// Minha resposta
// function perfilAdmin(usuario: Usuario): Function {
//     if (!usuario.admin || !usuario) {
//         throw new Error('Usuário não é administrador!');
//     }

//     return function (construtor: Construtor) {
//         return class extends construtor {
//             constructor(...args: Array<any>) {
//                 super(...args);
//             }
//         }
//     }
// }

// Resposta do desafio
function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: Array<any>) {
            super(...args);

            if (!usuarioLogado.admin || !usuarioLogado) {
                throw new Error('Sem permissão!');
            }
        }
    }
}

new MudancaAdministrativa().critico();

class ContaCorrente {
    @naoNegativo
    private saldo: number;

    public constructor(saldo: number) {
        this.saldo = saldo;
    }

    @congelar
    public sacar(@paramInfo valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo -= valor;

            return true;
        }

        return false;
    }

    @congelar
    public getSaldo(): number {
        return this.saldo;
    }

}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57);
cc.sacar(0.1);
console.log(cc.getSaldo());

// cc.getSaldo = function () {
//     return this['saldo'] + 7000;
// }

console.log(cc.getSaldo());

// Object.freeze();
function congelar(alvo: any, nomeMetodo: string, descriptor: PropertyDescriptor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descriptor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function (): any {
            return alvo['_' + nomePropriedade];
        },
        set: function (valor: any): void {
            if (valor < 0) {
                throw new Error('Saldo inválido!');
            }

            alvo['_' + nomePropriedade] = valor;
        }
    });
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
    console.log(`Alvo ${alvo}`);
    console.log(`Método ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);
}