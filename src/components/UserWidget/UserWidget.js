import React from 'react'
import { NavLink } from 'react-router-dom'

const UserWidget = () => {
    return (
        <NavLink activeClassName={`selected`} to={`/account`}>
            <img src={require('../../assets/icons/icon_user.svg').default} alt="User" />
        </NavLink>
    )
}

export default UserWidget
