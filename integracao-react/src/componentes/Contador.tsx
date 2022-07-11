import React, { Component, ReactElement } from "react";
import logRender from "../decorators/logRender";
import ContadorValor from "./ContadorValor";

interface IContadorProps {
    valorInicial?: number;
}

interface IContadorState {
    valor: number;
}

@logRender
export default class Contador extends Component<
    IContadorProps,
    IContadorState
> {
    public state: IContadorState = { valor: this.props.valorInicial || 0 };

    private setValor: Function = (delta: number): void => {
        this.setState({
            valor: this.state.valor + delta
        });
    }

    render(): ReactElement {
        return (
            <div>
                <ContadorValor contador={this.state.valor} />
                <button onClick={(): void => this.setValor(10)}>+</button>
                <button onClick={(): void => this.setValor(-10)}>-</button>
            </div>
        )
    }
}
