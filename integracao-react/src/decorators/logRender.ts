type Componente = {
    new(...args: any[]): {
        render(): JSX.Element | null;
    };
}

export default function logRender<C extends Componente>(componente: C) {
    return class extends componente {
        render() {
            console.log(`Renderizando o componente...`);
            const r: any = super.render();
            console.log('Rendização concluída!');
            return r;
        }
    }
}