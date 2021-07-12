import React, { useState, useEffect } from 'react';
import styles from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading';
import Waldo from '../Waldo/Waldo'
import { useParams } from 'react-router';
import { getFirestore } from '../../utils/firebase'

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const db = getFirestore();
            try {
                const itemsCollection = db.collection(`items`);
                const itemSnapshot = await itemsCollection.doc(id).get();
                if (!itemSnapshot.exists) {
                    console.log('No matching documents.');
                    return;
                  }
                
                setProduct({ id: itemSnapshot.id, ...itemSnapshot.data() })
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData();

    }, [id])

    return (
        <div id={styles.itemDetailContainer}>
            <div className="inner">
                {loading ? <Loading /> : product.id ? <ItemDetail item={product} /> : <Waldo message={`Product not found...`}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer
