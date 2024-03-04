import React from 'react'
import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.info}>
          <div className={style.logo}>
            <img src="/src/assets/images/layout/logo.svg" alt="" />
            <h1>Affaldsguiden</h1>
          </div>
          <p className={style.text}>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p>
          <h2>© 2023 Affaldsguiden</h2>
        </div>
        <div className={style.backTop}>
          <p>Back to top</p>
          <img
          onClick={() => window.scrollTo(0, 0)}
          src="/src/assets/images/layout/icon-arrow-up.svg" alt="" />
        </div>
      </div>
    </>
  )
}
