import React, { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import Waldo from '../Waldo/Waldo'
import { useParams } from 'react-router';
import { getFirestore } from '../../utils/firebase'

const ItemListContainer = () => {

    const { catId } = useParams();
    const [products, setProducts] = useState([])
    const [catInfo, setCatInfo] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);

            try {
                const db = getFirestore();

                const categoriesCollection = db.collection(`categories`);
                const catSnapshot = await categoriesCollection.doc(catId).get();

                const itemsCollection = db.collection(`items`);
                const itemSnapshot = catId ?
                    await itemsCollection.where('categoryId', '==', catId).limit(20).get()
                    :
                    await itemsCollection.orderBy('price', 'desc').limit(20).get();

                const items = itemSnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() };
                })

                setCatInfo(catSnapshot.exists ?
                    { id: catSnapshot.id, ...catSnapshot.data() }
                    :
                    { name: "Welcome to the machine", description: "Minimal selection of gadgets and NFTs" })

                setProducts(items);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [catId])

    return (
        <div id={styles.item_list_container}>
            <div className="inner">
                {loading ? <Loading /> :
                    <>
                        <div id={styles.item_list_container_header}>
                            <h1>{catInfo.name}</h1>
                            <p>{catInfo.description}</p>
                        </div>
                        {products.length > 0 ? <ItemList items={products} /> : <Waldo message={`No products in this category`} />}
                    </>
                }
            </div>
        </div>
    )
}

export default ItemListContainer