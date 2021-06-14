import React, { useState, useEffect } from 'react';
import Inner from '../../containers/Inner'
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList';

//To be removed...
import dummyProducts from '../../assets/dummy/products';

const ItemListContainer = ({ title }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                dummyProducts !== [] ? resolve(dummyProducts) : reject('No products')
            }, 2000);
        })

        getProducts
            .then(data => {
                setProducts(data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => console.log('request finalizado'))
    }, [])

    return (
        <div id={styles.item_list_container}>
            <Inner>
                <div id={styles.item_list_container_header}>
                    <h1>{title}</h1>
                </div>
                {products && <ItemList items={products} />}
            </Inner>
        </div>
    )
}

export default ItemListContainer