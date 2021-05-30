import React from 'react';
import Wrapper from '../../containers/Wrapper'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import ComingSoon from '../../components/ComingSoon'

const App = () => {
    return(
       <Wrapper>
            <NavBar />
            <ComingSoon title={`Vienen cosas maravillosas`}/>
            <Footer />
       </Wrapper>
    )
}
export default App; 