import React, { useState } from 'react';
import Wrapper from '../../containers/Wrapper'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Footer from '../Footer/Footer'

const App = () => {

    //const [productsInCart, setproductsInCart] = useState(1)
    const [productsInCart] = useState(1)
    
    return(
       <Wrapper>
            <NavBar productsCount={productsInCart}/>
            <ItemListContainer title={`Vienen cosas maravillosas`} />
            <ItemDetailContainer />
            <Footer />
       </Wrapper>
    )
}
export default App;