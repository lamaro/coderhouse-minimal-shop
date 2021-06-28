import React from 'react'
import waldo from '../../assets/images/waldo.gif'


const Waldo = () => {
    return (
        <div style={{display:'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center', height:'70vh'}}>
            <img style={{width:'50px', height:'75px'}} src={waldo} alt="Where's Waldo"/>
            <p>Nothing here yet...</p>
        </div>
    )
}

export default Waldo
