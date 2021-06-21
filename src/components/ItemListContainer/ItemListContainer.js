import React, { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import NoProductsFound from '../NoProductsFound/NoProductsFound'
import { useParams } from 'react-router';

//Dummy promises until Firebase gets connected...
import { getProductByCatId } from '../../utils/getProducts';
import { getCategoryById } from '../../utils/getCategories';

const ItemListContainer = () => {

    const { catId } = useParams();
    const [products, setProducts] = useState([])
    const [catInfo, setCatInfo] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getProductByCatId(catId)
            .then(data => {
                setProducts(data)
            })
            .catch((err) => {
                console.log(err)
                setProducts([])
            })
            .finally(() => setLoading(false))
    }, [catId])

    useEffect(() => {
        getCategoryById(catId)
            .then(data => {
                setCatInfo(data)
            })
            .catch((err) => {
                console.log(err)
                setCatInfo({})
            })
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
                        {products.length > 0 ? <ItemList items={products} /> : <NoProductsFound />}
                    </>
                }
            </div>
        </div>
    )
}

export default ItemListContainer