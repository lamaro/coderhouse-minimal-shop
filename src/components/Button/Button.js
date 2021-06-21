import React from 'react'
import styles from './Button.module.css'

const Button = ({ handleClick, children }) => {
    return (
        <button
            styles={styles}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button
