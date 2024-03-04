import React from 'react'
import style from './Hero.module.scss'
import Carousel from 'react-material-ui-carousel'
import { NavLink } from 'react-router-dom'

export const Hero = () => {

    const images = [
        '/src/assets/images/slideshow/affald-skov-1.jpg',
        '/src/assets/images/slideshow/affald-strand-2.jpg',
        '/src/assets/images/slideshow/malerspande.jpg'
    ]

    return (
        <>
            <div className={style.wrapper}>
                <Carousel className={style.carousel}
                    indicators={false}
                    animation={'slide'}
                    duration={1000}
                    interval={5000}
                    height={400}
                >
                    {
                        images.map((img, i) => {
                            return <img key={i} src={img} />
                        })
                    }
                </Carousel>
                <figure className={style.find}>
                    <h1>Find og anmeld genbrugsstationer</h1>
                    <div>
                        <NavLink>Find station</NavLink>
                        <NavLink>Log ind </NavLink>
                    </div>
                </figure>
            </div>
        </>
    )
}
