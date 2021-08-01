import React, { useState, useEffect } from 'react';
//import './Footer.css';
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../utils/getCategories';

const Footer = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories()
            .then((data) => {
                setCategories(data)
            })
    }, [])
    return (
        <footer>
            <div id={styles.menus_footer}>
                <div className="inner">
                    <div className={`grid ${styles.grid_footer}`}>
                        <div className="col_3 col_tb_12 col_mb_12">
                            <img src={require('../../assets/logo_w.svg').default} alt="Logo Minimal" />
                        </div>
                        <div className="col_6 col_tb_6 col_mb_6">
                            <h4>Shop</h4>
                            <ul>
                                {categories.map(({ id, name, inNavbar }) => inNavbar &&
                                    <li key={`${name}-${id}`}><NavLink activeClassName={`selected`} to={`/category/${id}`}>{name}</NavLink></li>
                                )}
                            </ul>
                            <ul>
                                {categories.map(({ id, name, inNavbar }) => !inNavbar &&
                                    <li key={`${name}-${id}`}><NavLink activeClassName={`selected`} to={`/category/${id}`}>{name}</NavLink></li>
                                )}
                            </ul>
                        </div>
                        <div className="col_3 col_tb_6 col_mb_6">
                            <h4>Info</h4>
                            <ul>
                                <li><NavLink activeClassName={`selected`} to={`/shipping`}>Shipping</NavLink></li>
                                <li><NavLink activeClassName={`selected`} to={`/about-us`}>About Us</NavLink></li>
                                <li><NavLink activeClassName={`selected`} to={`/contact`}>Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id={styles.bottom}>
                    <div className={`inner ${styles.footer_bottom_inner}`}>
                        <p>© 2021 Minimal Shop - <a href="https://minimal.com.ar">Terms and conditions</a></p>
                        <div id={styles.social_footer}>
                            <span>Follow Us</span>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer