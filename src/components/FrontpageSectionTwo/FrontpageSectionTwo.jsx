import React from 'react'
import style from './FrontpageSectionTwo.module.scss'
import { NavLink } from 'react-router-dom'

export const FrontpageSectionTwo = () => {
    return (
        <>
            <div className={style.wrapper}>
                <img src="/src/assets/images/frontpage2.png" alt="" />
                <div className={style.info}>
                    <h1>Bestil <span>din nye affaldsbeholder</span></h1>
                    <p>When an unknown printer took a galley of type and scramble it to make a type specimen book. It has survided not only</p>
                    <div className={style.buttons}>
                        <NavLink to='/order' className={style.buttonOne}>Bestil nu</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
