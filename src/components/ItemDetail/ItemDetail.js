import React from 'react'
import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {

    const { title, pictureUrl, description, price } = item

    const onAdd = amount => {
        console.log(`Productos agregados ${amount}`)
    }

    return (
        <section id={styles.product_details}>
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
                        <p className={styles.price}>{price}</p>
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail
