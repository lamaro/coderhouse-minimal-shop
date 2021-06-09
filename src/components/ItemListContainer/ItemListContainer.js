import React from 'react';
import './ItemListContainer.css'
import Inner from '../../containers/Inner'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ItemCount from '../ItemCount/ItemCount';

const ProductCard = ({colNum}) => {

    const onAdd = amount => {
        console.log(`Productos agregados ${amount}`)
    }

    return (
        <div className={`col_${colNum} product_card`}>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div style={{ fontSize: 150 }}><Skeleton /></div>
                <h2 style={{ fontSize: 40, lineHeight: 2 }}><Skeleton /></h2>
                <p style={{ fontSize: 20, lineHeight: 2 }}><Skeleton count={3} /></p>
            </SkeletonTheme>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
    )
}

const ItemListContainer = ({ title }) => {

    return (
        <div id="coming">
            <Inner>
                <div id="coming_header">
                    <h1>{title}</h1>
                </div>
                <div className="grid">
                    <ProductCard colNum={6} />
                    <ProductCard colNum={6} />
                    <ProductCard colNum={4} />
                    <ProductCard colNum={4} />
                    <ProductCard colNum={4} />
                    <ProductCard colNum={3} />
                    <ProductCard colNum={3} />
                    <ProductCard colNum={3} />
                    <ProductCard colNum={3} />
                </div>
            </Inner>
        </div>
    )
}

export default ItemListContainer