import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import style from './MainLayout.module.scss'

export const MainLayout = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Header />
                <main className={style.main}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
