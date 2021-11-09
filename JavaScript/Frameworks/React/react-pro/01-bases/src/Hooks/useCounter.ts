import { useState, useRef, useEffect, useLayoutEffect } from "react";

import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 1 }) => {

    const [ counter, setCounter ] = useState( 5 );
    // a diferencia del useState, useRef no vuelve a ejecutar el re renderizado cuando su valor cambia.
    const counterElement = useRef<HTMLHeadingElement>(null);

    const tl = useRef( gsap.timeline() );

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, maxCount ) );
    }

    // useLayoutEffect: se ejecuta después del renderizado del html
    useLayoutEffect(() => {
        if ( !counterElement.current ) return;

        // timeLine va a ejecutar las animaciones en secuencia
        tl.current.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
                  .to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' } )
                  .pause();
    }, [])

    useEffect(() => {
        // // estilisado de logs
        // console.log( '%cse llegó al máximo', 'color: red; background-color: black;' );
        tl.current.play(0);

    }, [ counter ]);

    return {
        counter,
        elementToAnimate: counterElement,
        handleClick
    }
}