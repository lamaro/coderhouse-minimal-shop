import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget'
import UserWidget from '../UserWidget/UserWidget'
import { Link, NavLink } from 'react-router-dom';
import { getCategories } from '../../utils/getCategories';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((data) => {
                setCategories(data)
            })

    }, [])

    return (
        <header>
            <div className={styles.inner_header}>
                <Link to={`/`}><img src={require('../../assets/logo.svg').default} alt="Minimal logo" id="logo" /></Link>
                <div id={styles.right_nav}>
                    <nav>
                        <ul>
                            {categories.map(({ id, name, inNavbar }) => inNavbar &&
                                <li key={`${name}-${id}`}><NavLink activeClassName={`selected`} to={`/category/${id}`}>{name}</NavLink></li>
                            )}
                            <li><NavLink activeClassName={`selected`} to={`/about-us`}>About us</NavLink></li>
                        </ul>
                    </nav>
                    <div id={styles.user_menu}>
                        <ul>
                            {/* <li><img src={require('../../assets/icons/icon_search.svg').default} alt="Search" /></li> */}
                            <li>
                                <CartWidget />
                            </li>
                            <li><UserWidget /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default NavBar;