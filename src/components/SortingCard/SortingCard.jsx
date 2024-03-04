import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './SortingCard.module.scss'

export const SortingCard = ({ data }) => {
    const { id, filepath, title, color } = data

    return (
        <>
            <div className={style.wrapper}>
                <NavLink to={`/sorting/${id}`}>
                    <img src={filepath} alt="" />
                    <h1 style={{ backgroundColor: `#${color}` }}>{title}</h1>
                </NavLink>
            </div>
        </>
    )
}
