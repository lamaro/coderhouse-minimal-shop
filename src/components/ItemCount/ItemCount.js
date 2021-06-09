import React, { useState } from 'react'
import styles from './ItemCount.module.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [cont, setCont] = useState(initial)


    const addItems = () => {
        cont < stock && setCont(cont + 1)
        console.log('items added')
    }

    const removeItems = () => {
        cont > 1 && setCont(cont - 1)
    }

    return (
        <div className={styles.counter_container}>
            <div className={styles.accions_container}>
                <div onClick={removeItems} >
                    -
                </div>
                <p>{cont}</p>
                <div onClick={addItems} >
                    +
                </div>
            </div>
            <button onClick={()=>onAdd(cont)}>Agregar</button>
        </div>
    )
}

export default ItemCount
