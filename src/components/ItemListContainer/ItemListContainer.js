import React, { useState, useEffect } from 'react';
import Inner from '../../containers/Inner'
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ title }) => {

    const [products, setproducts] = useState([])

    useEffect(() => {
        const dummyProducts = [
            { id: 1, title: 'Sable laser', price: 45.99, pictureUrl: '/' },
            { id: 2, title: 'Dummy product', price: 60.99, pictureUrl: '/' },
            { id: 3, title: 'Dummy product', price: 10.30, pictureUrl: '/' },
            { id: 4, title: 'Dummy product', price: 100, pictureUrl: '/' },
            { id: 5, title: 'Dummy product', price: 45.99, pictureUrl: '/' },
            { id: 6, title: 'Dummy product', price: 45.99, pictureUrl: '/' },
            { id: 7, title: 'Dummy product', price: 45.99, pictureUrl: '/' },
            { id: 8, title: 'Dummy product', price: 45.99, pictureUrl: '/' },
            { id: 9, title: 'Dummy product', price: 45.99, pictureUrl: '/' },
            { id: 10, title: 'Dummy product', price: 45.99, pictureUrl: '/' },
            { id: 11, title: 'Dummy product', price: 45.99, pictureUrl: '/' },
            { id: 12, title: 'Dummy product', price: 45.99, pictureUrl: '/' },
        ]

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                dummyProducts === [] ? resolve(dummyProducts) : reject('No products')
            }, 2000);
        })

        getProducts
            .then(data => {
                setproducts(data)
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