import React from 'react';
import './index.css'
import Inner from '../../containers/Inner'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductCard = () => {
    return (
        <div className="col_4 product_card">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div style={{ fontSize: 150 }}><Skeleton /></div>
                <h2 style={{ fontSize: 40, lineHeight: 2 }}><Skeleton /></h2>
                <p style={{ fontSize: 20, lineHeight: 2 }}><Skeleton count={3} /></p>
            </SkeletonTheme>
        </div>
    )
}

const ComingSoon = ({ title }) => {

    return (
        <div id="coming">
            <Inner>
                <div id="coming_header">
                    <h1>{title}</h1>
                </div>
                <div className="grid">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Inner>
        </div>
    )
}

export default ComingSoon