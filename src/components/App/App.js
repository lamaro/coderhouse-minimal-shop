import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Footer from '../Footer/Footer'

const App = () => {
    //const [productsInCart, setproductsInCart] = useState(1)
    const [productsInCart] = useState(1)

    return (
        <BrowserRouter>
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
                <Route exact path={`/about-us`}>
                </Route>
                <Route exact path={`/contact`}>
                </Route>
                <Route path="*">
                    <p>404 Not found</p>
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
export default App;