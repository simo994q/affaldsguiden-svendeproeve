import React from 'react'
import style from './FrontpageSectionOne.module.scss'
import { NavLink } from 'react-router-dom'

export const FrontpageSectionOne = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.info}>
          <h1>Din <span>guide til sortering</span></h1>
          <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.</p>
          <div className={style.buttons}>
            <NavLink to='/sorting' className={style.buttonOne}>Se affaldsguide</NavLink>
            <NavLink to='/order' className={style.buttonTwo}>Bestil storskrald</NavLink>
          </div>
        </div>
        <img src="/src/assets/images/frontpage1.png" alt="" />
      </div>
    </>
  )
}
