import React from 'react'
import style from './StepOne.module.scss'

export const StepOne = ({ step }) => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.numberWrapper} style={{ border: step === 1 ? '2px solid #D8EADB' : 'none' }}>
                    <div className={style.number}>1</div>
                </div>
                <div className={style.line} />
            </div>
        </>
    )
}
