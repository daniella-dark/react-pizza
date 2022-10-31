import React from 'react'
import styles from './NotFoundBlock.module.scss'
import imgNotFound from '../../assets/img/404.png'

const NotFoundBlock = () => {
  return (
      <div className={styles.block}>
          <div className={styles.error}>
                <img src={imgNotFound} alt="Not Found" />
                <div>
                    <h1>404</h1>
                    <p>Такой страницы не существует</p>
                </div>
        </div>
    </div>
  )
}

export default NotFoundBlock