import { useState } from 'react';

interface Props {
    initialValue?: number,
}

interface PropsStates {
    counter: number,
    clicks: number
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
                                    // generico, tipo de tipado
    const [ counters, setCounter ] = useState<PropsStates>({
        counter: initialValue,
        clicks: 0
    });

    const { counter, clicks } = counters;

    const handleClick = ( value: number ) => {
        // al poner parentesis, estamos retornando el objeto a modificar
        // desestructuración de prev
        setCounter( ({ counter, clicks }) => ({
            counter: counter + value,
            clicks: clicks + 1
        }));
    }

    return (
        <>
            <h1>CounterBy: { counter }</h1>
            <h1>CounterBy: { clicks }</h1>

            <button onClick={ () => { handleClick( 1 ) }}>+1</button>
            <button onClick={ () => { handleClick( 5 ) }}>+5</button>
        </>
    );
}