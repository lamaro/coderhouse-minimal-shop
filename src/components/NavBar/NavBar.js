import React from 'react';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ productsCount }) => {
    
    return (
        <header>
            <div className={styles.inner_header}>
                <Link to={`/`}><img src={require('../../assets/logo.svg').default} alt="Minimal logo" id="logo" /></Link>
                <div id={styles.right_nav}>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName={`selected`} to={`/category/1`}>Cat 1</NavLink></li>
                            <li><NavLink activeClassName={`selected`} to={`/category/2`}>Cat 2</NavLink></li>
                            <li><NavLink activeClassName={`selected`} to={`/item/1`}>Prod 1</NavLink></li>
                            <li><NavLink activeClassName={`selected`} to={`/item/2`}>Prod 2</NavLink></li>
                            <li><NavLink activeClassName={`selected`} to={`/about-us`}>About us</NavLink></li>
                            <li><NavLink activeClassName={`selected`} to={`/contact`}>Contact</NavLink></li>
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