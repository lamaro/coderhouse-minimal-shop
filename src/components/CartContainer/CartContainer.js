import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import Waldo from '../Waldo/Waldo';

const CartContainer = () => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;
    return (
        <div className="inner">
            {cart.length > 0 ? cart.map(product => <p>{product.item.title} y tenes {product.quantity}</p>) : <Waldo />}
        </div>
    )
}
export default CartContainer
