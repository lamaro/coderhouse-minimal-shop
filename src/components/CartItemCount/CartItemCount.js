import React, { useState, useEffect } from 'react'
import styles from './CartItemCount.module.css'

const CartItemCount = ({ item, stock, initial, onEdit }) => {

    const [productsToCart, setProductsToCart] = useState(initial)

    useEffect(() => {
        onEdit({ item, quantity: productsToCart })
    }, [productsToCart]) // eslint-disable-line react-hooks/exhaustive-deps

    const addItems = () => {
        if (productsToCart < stock) {
            setProductsToCart(productsToCart + 1)
        }
    }

    const removeItems = () => {
        if (productsToCart > 1) {
            setProductsToCart(productsToCart - 1)
        }
    }

    return (
        <div className={styles.counter_container}>
            <div className={styles.accions_container}>
                <div onClick={removeItems} >
                    -
                </div>
                <p>{productsToCart}</p>
                <div onClick={addItems} >
                    +
                </div>
            </div>
        </div>
    )
}

export default CartItemCount
