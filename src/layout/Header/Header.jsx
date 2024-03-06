import React, { useState } from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

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

        <ul className={style.burgerNav} style={{ display: isOpen ? 'flex' : 'none' }}>
          <img
            onClick={() => setIsOpen(!isOpen)}
            src='/src/assets/images/close.svg' alt="" className={style.close} />
          <li
            onClick={() => setIsOpen(!isOpen)}
          ><NavLink to='/'>Forside</NavLink></li>
          <li
            onClick={() => setIsOpen(!isOpen)}
          ><NavLink to='/sorting'>Sortering</NavLink></li>
          <li
            onClick={() => setIsOpen(!isOpen)}
          ><NavLink to='/stations'>Genbrugsstationer</NavLink></li>
          <li
            onClick={() => setIsOpen(!isOpen)}
          ><NavLink to='/order'>Bestil beholder</NavLink></li>
        </ul>


        <NavLink to='/login'>
          <div className={style.login}>
            <img src="/src/assets/images/layout/icon-unlock.svg" alt="Login" />
          </div>
        </NavLink>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src="/src/assets/images/burger.svg" alt="" className={style.open} />
      </div>
    </>
  )
}
