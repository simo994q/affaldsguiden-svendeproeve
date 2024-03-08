import React, { useState } from 'react'
import style from './Orderpage.module.scss'
import { ContainerInfo } from '../../components/ContainerInfo/ContainerInfo'
import { ShippingInfo } from '../../components/ShippingInfo/ShippingInfo'
import { StepOne } from '../../components/StepOne/StepOne'
import { StepTwo } from '../../components/StepTwo/StepTwo'

export const Orderpage = () => {

  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState()

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.stepWrapper}>
          <div className={style.steps}>
            <StepOne step={step} />
            <StepTwo step={step} />
          </div>
        </div>
        {step === 1 ?
          <ContainerInfo selected={selected} setSelected={setSelected} setStep={setStep} />
          :
          <ShippingInfo selected={selected} setStep={setStep} />
        }
      </div>
      <img style={{ width: '100%' }} src="/src/assets/images/layout/bg-wave-1.svg" alt="" />
    </>
  )
}
