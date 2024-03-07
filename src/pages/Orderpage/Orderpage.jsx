import React, { useState } from 'react'
import style from './Orderpage.module.scss'
import { ContainerInfo } from '../../components/ContainerInfo/ContainerInfo'
import { ShippingInfo } from '../../components/ShippingInfo/ShippingInfo'

export const Orderpage = () => {

  const [step, setStep] = useState(1)

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.stepWrapper}>

        </div>
        {step === 1 ?
          <ContainerInfo />
          :
          <ShippingInfo />
        }
      </div>
      <img style={{ width: '100%' }} src="/src/assets/images/layout/bg-wave-1.svg" alt="" />
    </>
  )
}
