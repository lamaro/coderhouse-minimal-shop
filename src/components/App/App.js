import React, { useState } from 'react';
import Wrapper from '../../containers/Wrapper'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Footer from '../Footer/Footer'

const App = () => {
    const [ productsCount ] = useState(5); //TODO: add setProductsCount
    return(
       <Wrapper>
            <NavBar productsCount={productsCount}/>
            <ItemListContainer title={`Vienen cosas maravillosas`} />
            <Footer />
       </Wrapper>
    )
}
export default App; 