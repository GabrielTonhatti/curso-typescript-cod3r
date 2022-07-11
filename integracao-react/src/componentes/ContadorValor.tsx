import React, { ReactElement } from "react";

interface IContadorValorProps {
    contador: number;
}

const contador: Function = (props: IContadorValorProps): ReactElement => (
    <p>{props.contador}</p>
);
export default contador;
