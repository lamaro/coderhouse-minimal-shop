import React from 'react'
import styles from './SectionHeader.module.css'

const SectionHeader = ({title, description}) => {
    return (
        <div id={styles.header}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default SectionHeader
