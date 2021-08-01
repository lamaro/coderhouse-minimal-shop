import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './CartWidget.module.css'

import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {

    const cartContext = useContext(CartContext);
    const { getTotalItemsInCart } = cartContext;

    return (
        <NavLink activeClassName={`selected`} to={`/cart`}>
            <div className={styles.cart_icon_container}>
                <img src={require('../../assets/icons/icon_cart.svg').default} alt="Cart" />
                {getTotalItemsInCart() > 0 && <p>{getTotalItemsInCart()}</p>}
            </div>
        </NavLink>
    )
}

export default CartWidget

