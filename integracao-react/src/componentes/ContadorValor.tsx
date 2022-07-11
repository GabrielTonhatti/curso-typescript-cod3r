import React, { ReactElement } from "react";

interface IContadorValorProps {
    contador: number;
}

const contadorValor: Function = (props: IContadorValorProps): ReactElement => (
    <p>{props.contador}</p>
);
export default contadorValor;
