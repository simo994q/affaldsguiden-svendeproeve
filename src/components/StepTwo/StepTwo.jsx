import React from 'react'
import style from './StepTwo.module.scss'

export const StepTwo = ({ step }) => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.line} style={{ backgroundColor: step === 2 ? '#D8EADB' : '#BCBDBD' }} />
                <div className={style.numberWrapper} style={{border: step === 2 ? '2px solid #D8EADB' : 'none'}}>
                    <div className={style.number} style={{ backgroundColor: step === 2 ? '#D8EADB' : '#BCBDBD' }} >2</div>
                </div>
            </div>
        </>
    )
}
