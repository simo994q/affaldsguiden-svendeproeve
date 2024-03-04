import React from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src="/src/assets/images/layout/logo.svg" alt="Logo" />
          <h1>Affaldsguiden</h1>
        </div>
        <ul className={style.nav}>
          <li><NavLink to='/'>Forside</NavLink></li>
          <li><NavLink to='/sorting'>Sortering</NavLink></li>
          <li><NavLink to='/stations'>Genbrugsstationer</NavLink></li>
          <li><NavLink to='/order'>Bestil beholder</NavLink></li>
        </ul>
        <div className={style.login}>
          <NavLink to='/login'>
            <img src="/src/assets/images/layout/icon-unlock.svg" alt="Login" />
          </NavLink>
        </div>
      </div>
    </>
  )
}
