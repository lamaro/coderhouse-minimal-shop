import React, { useState, useEffect } from 'react';
import styles from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import Inner from '../../containers/Inner'
import Loading from '../Loading/Loading';
import { useParams } from 'react-router';

//To be removed...
import { getProductById } from '../../assets/dummy/products';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProductById(id)
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div id={styles.itemDetailContainer}>
            <Inner>
            {loading ? <Loading /> : <ItemDetail item={product} />}
            </Inner>
        </div>
    )
}

export default ItemDetailContainer
