import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import Waldo from '../Waldo/Waldo';
import Cart from '../Cart/Cart';

const CartContainer = () => {
    const cartContext = useContext(CartContext);
    const { cart, updateQty, getCartTotal, removeItem } = cartContext;

    return (
        <div className="inner">
            {cart.length > 0 ? <Cart cart={cart} updateQty={updateQty} getCartTotal={getCartTotal} removeItem={removeItem} /> : <Waldo message={`No products yet...`} linkHome={true} />}
        </div>
    )
}
export default CartContainer
