import React from 'react';
import './index.css';
const NavBar = ()=> {
    return(
        <header>
            <div className="inner_header">
                <img src={require('../../assets/logo.svg').default} alt="Minimal logo" id="logo"/>
                <div id="right_nav">
                    <nav>
                        <ul>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Contact</a></li>           
                        </ul>
                    </nav>
                    <div id="user_menu">
                        <ul>
                            <li><img src={require('../../assets/icons/icon_search.svg').default} alt="Search"/></li>
                            <li className="cart"><a href="/cart">
                                <img src={require('../../assets/icons/icon_cart.svg').default} alt="Cart"/></a>
                            </li>
                            <li className="login"><a href="/"><img src={require('../../assets/icons/icon_user.svg').default} alt="User"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default NavBar;