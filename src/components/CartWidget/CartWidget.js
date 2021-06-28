import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import styles from './CartWidget.module.css'

import { CartContext } from '../../contexts/CartContext';

const CartWidget = ({ productsCount = 0 }) => {

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

CartWidget.defaultProps = {
    productsCount: 0
}
CartWidget.propTypes = {
    productsCount: PropTypes.number.isRequired
}

export default CartWidget

