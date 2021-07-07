import React from 'react'
import waldo from '../../assets/images/waldo.gif'
import { Link } from 'react-router-dom'


const Waldo = ({message}) => {
    return (
        <div style={{display:'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center', height:'70vh'}}>
            <img style={{width:'50px', height:'75px', marginBottom:'20px'}} src={waldo} alt="Where's Waldo"/>
            <p>{message} <Link to={`/`}> <strong>Go fish...</strong></Link></p>
        </div>
    )
}

export default Waldo
