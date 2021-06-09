import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ItemCount from '../ItemCount/ItemCount';
import styles from './Item.module.css'

const Item = ({colNum, item}) => {
    const {title, price} = item
    
    const onAdd = amount => {
        console.log(`Productos agregados ${amount}`)
    }

    return (
        <div className={`col_${colNum}`}>
            <div className={styles.product_card}>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <div style={{ fontSize: 150 }}><Skeleton /></div>
                    <h2 style={{ fontSize: 40, lineHeight: 2 }}>{title}</h2>
                    <p style={{ fontSize: 20, lineHeight: 2 }}><Skeleton count={3} /></p>
                    <p style={{ fontSize: 20, lineHeight: 2 }}>{price}</p>
                </SkeletonTheme>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default Item