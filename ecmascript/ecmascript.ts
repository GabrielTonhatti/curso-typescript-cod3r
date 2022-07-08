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
const somar = function(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2, 3));