import React, { useState, useContext } from 'react'
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';

const ItemDetail = ({ item }) => {

    const cartContext = useContext(CartContext);
    const { addToCart } = cartContext;

    const [addedItems, setAddedItems] = useState(0)
    const [showNotice, setShowNotice] = useState(false)

    const { title, pictureUrl, description, price } = item

    // const productsAdded = () => {
    //     const allReadyAdded = isInCart(id)
    //     return allReadyAdded ? allReadyAdded.quantity : 1

    // }

    const onAdd = amount => {
        addToCart({item, quantity: amount })        
        setAddedItems(amount)
        setShowNotice(true)
    }

    return (
        <section id={styles.product_details}>
            {showNotice &&
                <div className="notice green">
                    <p>{`${addedItems} x beautiful ${title} added to your cart`}</p>
                    <Link to={`/cart`}><button>Go to cart</button></Link>
                </div>
            }
            <div className="grid">
                <div className="col_6">
                    <div className="image_wrapper">
                        <img src={pictureUrl} alt={title} />
                    </div>
                </div>
                <div className="col_6">
                    <div className="info_wrapper">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <p className={styles.price}>Ξ{price}</p>
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail
