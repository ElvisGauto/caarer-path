import { useReducer } from 'react';


interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

type CounterAction =
    | { type: 'increaseBy', payload: {  value: number } }
    | { type: 'reset' };

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    const { counter, changes } = state;

    switch ( action.type ) {
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previous: 0
            }
        case 'increaseBy':
            return {
                changes: changes + 1,
                counter: counter + action.payload.value,
                previous: counter
            }
    
        default:
            return state;
    }
}


export const CounterReducer = () => {

    // reducer significa que recibe un estado inicial, una acción y produce otro estado.
    // es parecido al useState porque maneja un estado interno solo que sirve para manejos más complejos.
    const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleIncreaseBy = ( value: number ) => {
        dispatch({ type: 'increaseBy', payload: { value } }); 
    }

    const handleReset = () => {
        dispatch({ type: 'reset' }); 
    }

    return (
        <>
            {/* <h1>CounterReducer: { counterState.counter }</h1> */}

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