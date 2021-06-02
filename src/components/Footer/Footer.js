import React from 'react';
import Inner from '../../containers/Inner'
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div id="menus_footer">
                <Inner>
                    <div className="grid">
                        <div className="col_3">
                            <img src={require('../../assets/logo_w.svg').default} alt="Logo Minimal" />
                        </div>
                        <div className="col_6">
                            <h4>Shop</h4>
                            <ul>
                                <li><a href="/">Shop</a></li>
                                <li><a href="/">Monthly Offers</a></li>
                            </ul>
                            <ul>
                                <li><a href="/">Featured</a></li>
                                <li><a href="/">On Sale</a></li>
                            </ul>
                        </div>
                        <div className="col_3">
                            <h4>Info</h4>
                            <ul>
                                <li><a href="/">Shipping</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </Inner>
                <div id="bottom">
                    <Inner>
                        <p>© 2021 Minimal Shop - <a href="/">Terms and conditions</a></p>
                        <div id="social_footer">
                            <span>Follow Us</span>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        </div>
                    </Inner>
                </div>
            </div>
        </footer>
    )
}

export default Footer