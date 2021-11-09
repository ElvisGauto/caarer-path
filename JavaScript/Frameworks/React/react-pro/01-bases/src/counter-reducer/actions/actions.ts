export type CounterAction =
    | { type: 'increaseBy', payload: {  value: number } }
    | { type: 'reset' };

// export const doReset = (): CounterAction => {
//     return {
//         type: 'reset'
//     }
// }
// Retorno Implicito: (parentesis) = doReset regresa un objeto
export const doReset = (): CounterAction => ({
    type: 'reset'
})

export const doIncreaseBy = ( value: number ): CounterAction => ({
    type: 'increaseBy',
    payload: { value }
});