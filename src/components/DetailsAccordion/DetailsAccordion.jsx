import React, { useState } from 'react'
import style from './DetailsAccordion.module.scss'

export const DetailsAccordion = ({ details }) => {
    const { title, image_filepath, icon_filepath, types } = details

    let notAllowed = []
    let Allowed = []

    const [isOpen, setIsOpen] = useState(false)

    //allowed or not allowed
    types.map((type) => {
        if (type.rules.is_allowed === true) {
            Allowed.push(type)
        } else {
            notAllowed.push(type)
        }
    })

    const checkAllow = (rules) => {
        const { is_station, is_home } = rules
        if (is_station && is_home) {
            return 'Hjemme og station'
        }
        else if (is_station && !is_home) {
            return 'Station'
        }
        else if (!is_station && is_home) {
            return 'Hjemme'
        }
    }

    const checkColor = (rules) => {
        const { is_station, is_home } = rules
        if (is_station && is_home) {
            return '#90EE90'
        }
        else if (is_station && !is_home) {
            return '#FFBF00'
        }
        else if (!is_station && is_home) {
            return '#6495ED'
        }
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.infoHeader}>
                    <img src={icon_filepath} alt="" />
                    <h1>{title}</h1>
                </div>
                <div style={{display: isOpen ? 'flex' : 'none'}} className={style.fullInfoWrapper}>
                    <div className={style.infoWrapper}>
                        <h2>Hvad modtager vi?</h2>
                        <hr />
                        <div className={style.allowedSection}>
                            {Allowed.length ? 
                                Allowed.map((type) => {
                                    return (
                                        <div key={type.id}>
                                            <p className={style.title}>{type.title}</p>
                                            <p className={style.titleInfo} style={{ backgroundColor: checkColor(type.rules) }}>{checkAllow(type.rules)}</p>
                                        </div>
                                    )
                                })
                                :
                                <>Intet data</>
                            }
                        </div>
                    </div>
                    <div className={style.infoWrapper}>
                        <h2>Hvad modtager vi ikke?</h2>
                        <hr />
                        <div className={style.notAllowedSection}>
                            {notAllowed.length ? 
                                notAllowed.map((type) => {
                                    return (
                                        <div key={type.id}>
                                            <p className={style.title}>{type.title}</p>
                                            <p className={style.titleInfoNo}>Nej tak</p>
                                        </div>
                                    )
                                })
                                :
                                <>Intet data</>
                            }
                        </div>
                    </div>
                </div>
                <img
                    onClick={() => setIsOpen(!isOpen)}
                    className={style.openArrow}
                    style={{ rotate: isOpen ? '0deg' : '180deg' }}
                    src="/src/assets/images/layout/icon-arrow-up.svg" alt="" />
            </div>
        </>
    )
}
