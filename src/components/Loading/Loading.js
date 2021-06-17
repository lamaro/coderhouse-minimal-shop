import React from 'react'
import {ReactComponent as Loader} from '../../assets/images/loader.svg';
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div id={styles}>
            <Loader />
        </div>
    )
}

export default Loading
