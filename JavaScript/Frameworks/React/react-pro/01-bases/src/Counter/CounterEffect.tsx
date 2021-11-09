import { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [ counter, setCounter ] = useState( 5 );
    // a diferencia del useState, useRef no vuelve a ejecutar el re renderizado cuando su valor cambia.
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ) );
    }

    // useLayoutEffect: se ejecuta después del renderizado del html

    useEffect(() => {
        if ( counter < MAXIMUN_COUNT ) return;
        // estilisado de logs
        console.log( '%cse llegó al máximo', 'color: red; background-color: black;' );

        const tl = gsap.timeline();

        // timeLine va a ejecutar las animaciones en secuencia
        tl.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
          .to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' } );
    }, [ counter ]);

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={ counterElement }> { counter }</h2>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    );
}