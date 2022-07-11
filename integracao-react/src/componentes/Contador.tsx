import React, { Component, ReactElement } from "react";
import ContadorValor from "./ContadorValor";

interface IContadorProps {
    valorInicial?: number;
}

interface IContadorState {
    valor: number;
}

export default class Contador extends Component<
    IContadorProps,
    IContadorState
> {
    public state: IContadorState = { valor: this.props.valorInicial || 0 };

    render(): ReactElement {
        return <ContadorValor contador={this.state.valor} />;
    }
}
