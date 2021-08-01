import React from 'react';
import styles from './Item.module.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Item = ({ colNum, item }) => {
    const { id, title, price, pictureUrl, description } = item

    return (
        <div className={`col_${colNum}`}>
            <div className={styles.product_card}>
                <figure className={styles.thumbnail}><img src={pictureUrl} alt={title} /></figure>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>Ξ{price}</p>
                <Link to={`/item/${id}`}>
                    <Button>View more</Button>
                </Link>
            </div>
        </div>
    )
}

export default Item