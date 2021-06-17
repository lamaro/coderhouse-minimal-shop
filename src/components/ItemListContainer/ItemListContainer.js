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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProductByCatId(catId)
            .then(data => {
                setProducts(data)
                setLoading(false)
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
                {loading ? <Loading /> : <ItemList items={products} /> }
            </Inner>
        </div>
    )
}

export default ItemListContainer