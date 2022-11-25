import React from 'react'
import styles from './FetchErrorBlock.module.scss'

export const FetchErrorBlock: React.FC = () => 
    <div className={styles.root}>
        <h1>Произошла ошибка</h1>
        <p>Не удалось загрузить список пицц :с</p>
        <img src="516605948.jpg" alt=":c" />
    </div>