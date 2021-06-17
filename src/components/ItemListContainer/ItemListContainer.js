import React, { useState, useEffect } from 'react';
import Inner from '../../containers/Inner'
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router';

//To be removed...
import { getProductByCatId } from '../../assets/dummy/products';

const ItemListContainer = ({ title }) => {

    const { catId } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductByCatId(catId)
            .then(data => {
                setProducts(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [catId])

    return (
        <div id={styles.item_list_container}>
            <Inner>
                <div id={styles.item_list_container_header}>
                    <h1>{title}</h1>
                </div>
                {products.length > 0 ? <ItemList items={products} /> : <Loading />}
            </Inner>
        </div>
    )
}

export default ItemListContainer