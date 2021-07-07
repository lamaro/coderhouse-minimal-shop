import React, { useState } from 'react'
import styles from './CartItemCount.module.css'


const CartItemCount = ({ item, stock, initial, onEdit }) => {

    const [productsToCart, setProductsToCart] = useState(initial)
    
    const addItems = () => { //el setState esta actualizando, pero necesito pasarle un + 1 a OnEdit, no debería!
        if(productsToCart < stock){
            setProductsToCart(productsToCart + 1)
            onEdit({item, quantity:productsToCart + 1})
        }
    }

    const removeItems = () => { //el setState esta actualizando, pero necesito pasarle un - 1 a OnEdit, no debería!
        if(productsToCart > 1){
            setProductsToCart(productsToCart - 1)
            onEdit({item, quantity:productsToCart - 1})
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
