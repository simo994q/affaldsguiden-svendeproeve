import React from 'react'
import style from './Frontpage.module.scss'
import { Hero } from '../../components/Hero/Hero'
import { FrontpageSectionOne } from '../../components/FrontpageSectionOne/FrontpageSectionOne'
import { FrontpageSectionTwo } from '../../components/FrontpageSectionTwo/FrontpageSectionTwo'

export const Frontpage = () => {
  return (
    <>
      <Hero />
      <FrontpageSectionOne />
      <FrontpageSectionTwo />
      <img className={style.wave} src="/src/assets/images/layout/bg-wave-1.svg" alt="" />
    </>
  )
}
