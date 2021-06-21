import React from 'react'
import oneUp from '../../assets/images/one_up.png'
import styles from './NoProductsFound.module.css'
import { Link } from 'react-router-dom'

const NoProductsFound = () => {
    return (
        <div id={styles.npf_wrapper}>
            <p>No products yet...</p>
            <Link to={`/`}>
                <img src={oneUp} alt="1up" />
            </Link>
        </div>
    )
}

export default NoProductsFound
