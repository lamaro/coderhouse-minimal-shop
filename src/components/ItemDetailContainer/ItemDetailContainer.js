import React, { useState, useEffect } from 'react';
import styles from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import Inner from '../../containers/Inner'
import { useParams } from 'react-router';

//To be removed...
import { getProductById } from '../../assets/dummy/products';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div id={styles.itemDetailContainer}>
            <Inner>
                {product && <ItemDetail item={product} />}
            </Inner>
        </div>
    )
}

export default ItemDetailContainer
