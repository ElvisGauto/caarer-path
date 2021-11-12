import { Props as ProductCardProps } from '../components/ProductCard';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductImageProps } from '../components/ProductImage';
import { ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title:   ( props: ProductTitleProps ) => JSX.Element,
    Image:   ( props: ProductImageProps ) => JSX.Element,
    Buttons: ( props: ProductButtonsProps ) => JSX.Element
}