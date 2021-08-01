import React, { useState } from 'react'
import styles from './ItemCount.module.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [productsToCart, setProductsToCart] = useState(initial)


    const addItems = () => {
        productsToCart < stock && setProductsToCart(productsToCart + 1)
        console.log('item +')
    }

    const removeItems = () => {
        productsToCart > 1 && setProductsToCart(productsToCart - 1)
        console.log('item -')
    }

    const addProductsToCart = (cant) => {
        setProductsToCart(cant)
        onAdd(productsToCart)
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
            <button onClick={() => addProductsToCart(productsToCart)}>Add to cart</button>
        </div>
    )
}

export default ItemCount
