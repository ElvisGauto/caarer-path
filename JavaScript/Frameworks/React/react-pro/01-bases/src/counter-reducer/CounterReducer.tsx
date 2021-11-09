import { useReducer } from 'react';

import { CounterState } from './interfaces/counter.model';
import { counterReducer } from './state/counterReducer';
import * as actions from './actions/actions';

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducer = () => {

    // reducer significa que recibe un estado inicial, una acción y produce otro estado.
    // es parecido al useState porque maneja un estado interno solo que sirve para manejos más complejos.
    const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleIncreaseBy = ( value: number ) => {
        dispatch( actions.doIncreaseBy( value ) ); 
    }

    const handleReset = () => {
        dispatch( actions.doReset() ); 
    } 

    return (
        <>
            <h1>Counter Reducer Segmentado</h1>

            <pre>
                { JSON.stringify( counterState, null, 2 ) }
            </pre>

            <button onClick={ () => { handleIncreaseBy( 1 ) } }>
                +1
            </button>
            <button onClick={ () => { handleIncreaseBy( 5 ) } }>
                +5
            </button>
            <button onClick={ () => { handleIncreaseBy( 10 ) } }>
                +10
            </button>
            <button onClick={ handleReset }>
                reset
            </button>
        </>
    );
}