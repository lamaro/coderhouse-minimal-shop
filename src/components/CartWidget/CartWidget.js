import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import styles from './CartWidget.module.css'

const CartWidget = ({ productsCount = 0 }) => {

    return (
        <Link to={`/cart`}>
            <div className={styles.cart_icon_container}>
                <img src={require('../../assets/icons/icon_cart.svg').default} alt="Cart" />
                {productsCount > 0 && <p>{productsCount}</p>}
            </div>
        </Link>
    )
}

CartWidget.defaultProps = {
    productsCount: 0
}
CartWidget.propTypes = {
    productsCount: PropTypes.number.isRequired
}

export default CartWidget

