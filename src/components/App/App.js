import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { CartProvider } from '../../contexts/CartContext';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Footer from '../Footer/Footer';
import CartContainer from '../CartContainer/CartContainer';
import CheckoutContainer from '../CheckoutContainer/CheckoutContainer';
import Waldo from '../Waldo/Waldo';

const App = () => {


    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
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
                    <Route exact path={`/checkout`}>
                        <CheckoutContainer />
                    </Route>
                    <Route exact path={`/about-us`}>
                        <Waldo message={`Come back soon, or maybe...`} />
                    </Route>
                    <Route exact path={`/account`}>
                        <Waldo message={`No user implementation yet...`} />
                    </Route>
                    <Route exact path={`/contact`}>
                        <Waldo message={`Come back soon, or maybe...`} />
                    </Route>
                    <Route path="*">
                        <Waldo message={`Page not found...`} />
                    </Route>
                </Switch>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}
export default App;