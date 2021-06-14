import React, { useState, useEffect } from 'react';
import styles from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import Inner from '../../containers/Inner'

//To be removed...
import dummyProducts from '../../assets/dummy/products';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const dummyProduct = dummyProducts[0] //the first dummy product

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                dummyProduct ? resolve(dummyProduct) : reject('No product')
            }, 2000);
        })

        getProducts
            .then(data => {
                setProduct(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div id={styles.itemDetailContainer}>
            <Inner>
                {product && <ItemDetail item={product} />}
            </Inner>
        </div>
    )
}

export default ItemDetailContainer
