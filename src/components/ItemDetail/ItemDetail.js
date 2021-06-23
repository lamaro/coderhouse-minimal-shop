import React, { useState } from 'react'
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {

    const [totalItems, setTotalItems] = useState(0)
    const [addedItems, setAddedItems] = useState(0)
    const [showViewCart, setShowViewCart] = useState(false)

    const { title, pictureUrl, description, price } = item

    const onAdd = amount => {
        setTotalItems(totalItems + amount)
        setAddedItems(amount)
        setShowViewCart(true)
    }

    return (
        <section id={styles.product_details}>
            {showViewCart &&
                <div class="notice green">
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
