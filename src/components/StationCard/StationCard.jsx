import React from 'react'
import style from './StationCard.module.scss'
import { NavLink } from 'react-router-dom'

export const StationCard = ({ details }) => {

    const { name, address, city, zipcode, id } = details

    return (
        <>
            <NavLink to={`/stations/${id}`}>
                <div className={style.wrapper}>
                    <img src="/src/assets/images/map.png" alt="" />
                    <div className={style.info}>
                        <h1>{name}</h1>
                        <h2>{address}</h2>
                        <p>{zipcode} {city}</p>
                    </div>
                </div>
            </NavLink>
        </>
    )
}
