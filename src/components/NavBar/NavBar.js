import React from 'react';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({ productsCount }) => {
    
    return (
        <header>
            <div className={styles.inner_header}>
                <img src={require('../../assets/logo.svg').default} alt="Minimal logo" id="logo" />
                <div id={styles.right_nav}>
                    <nav>
                        <ul>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                    <div id={styles.user_menu}>
                        <ul>
                            <li><img src={require('../../assets/icons/icon_search.svg').default} alt="Search" /></li>
                            <li>
                                <a href="/cart">
                                    <CartWidget productsCount={productsCount} />
                                </a>
                            </li>
                            <li><a href="/"><img src={require('../../assets/icons/icon_user.svg').default} alt="User" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default NavBar;