import { useCart } from '../hooks/useCart';
import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';

export const Products = ({ products }) => {

    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                    {
                                        !isProductInCart 
                                        ? <AddToCartIcon />
                                        : <RemoveFromCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
