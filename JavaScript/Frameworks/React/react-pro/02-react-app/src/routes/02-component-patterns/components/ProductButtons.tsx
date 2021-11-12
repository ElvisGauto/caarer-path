import { useContext } from "react";

import styles from "../styles/styles.module.css";

import { ProductContext } from './ProductCard';

export interface ProductButtonsProps {
    className?: string;
    activeBtnClass?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    const { increaseBy, counter } = useContext( ProductContext );

    return (
        <div 
            className={ `${styles.buttonsContainer} ${className}`  }
            style={ style }
        >
            <button className={ styles.buttonMinus } onClick={ () => { increaseBy( -1 ) }}>-</button>
            <div className={ styles.countLabel }> { counter } </div>
            <button className={ styles.buttonAdd } onClick={ () => { increaseBy( +1 ) }}>+</button>
        </div>
    )
}