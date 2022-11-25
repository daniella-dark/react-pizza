import React from 'react'
import styles from './Loader.module.scss'

export const Loader: React.FC = () =>
    <div className="container">
        <div className={styles.root}>
            <span className={styles.loader} ></span>
        </div>
    </div>
