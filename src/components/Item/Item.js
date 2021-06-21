import React from 'react';
import styles from './Item.module.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Item = ({ colNum, item }) => {
    const { id, title, price, pictureUrl, description } = item

    return (
        <div className={`col_${colNum}`}>
            <div className={styles.product_card}>
                <div style={{ fontSize: 150 }}><img src={pictureUrl} alt={title} /></div>
                <h2 style={{ fontSize: 40, lineHeight: 1.2 }}>{title}</h2>
                <p style={{ fontSize: 20, lineHeight: 2 }}>{description}</p>
                <p style={{ fontSize: 20, lineHeight: 2 }}>Ξ{price}</p>
                <Link to={`/item/${id}`}>
                    <Button>View more</Button>
                </Link>
            </div>
        </div>
    )
}

export default Item