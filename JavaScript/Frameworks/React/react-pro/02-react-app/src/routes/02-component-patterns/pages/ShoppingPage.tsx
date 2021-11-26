import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/product';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
                                                        

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map( ( product ) => (
                        <ProductCard
                            className="bg-dark text-white"
                            product={ product }
                            key={ product.id }
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">

                {
                    // sirve para obtener las entradas de un objeto y que podamos mapearlas
                    Object.entries( shoppingCart ).map (([key, product]) => (
                        <ProductCard
                            key={ key }
                            className="bg-dark text-white"
                            product={ product }
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>

            <div>
                <code>
                    { JSON.stringify( shoppingCart, null, 5 ) }
                </code>
            </div>

        </div>
    )
}
