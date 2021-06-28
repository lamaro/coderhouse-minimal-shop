import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { CartProvider } from '../../contexts/CartContext';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Footer from '../Footer/Footer';
import CartContainer from '../CartContainer/CartContainer';
import Waldo from '../Waldo/Waldo';

const App = () => {
    //const [productsInCart, setproductsInCart] = useState(1)
    const [productsInCart] = useState(1)

    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar productsCount={productsInCart} />
                <Switch>
                    <Route exact path={`/`}>
                        <ItemListContainer />
                    </Route>
                    <Route exact path={`/category/:catId`}>
                        <ItemListContainer />
                    </Route>
                    <Route exact path={`/item/:id`}>
                        <ItemDetailContainer />
                    </Route>
                    <Route exact path={`/cart`}>
                        <CartContainer />
                    </Route>
                    <Route exact path={`/about-us`}>
                        <Waldo />
                    </Route>
                    <Route exact path={`/account`}>
                        <Waldo />
                    </Route>
                    <Route exact path={`/contact`}>
                        <Waldo />
                    </Route>
                    <Route path="*">
                        <Waldo />
                    </Route>
                </Switch>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}
export default App;