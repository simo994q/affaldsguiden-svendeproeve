import React, { useEffect, useState, useContext } from 'react'
import style from './Stationpage.module.scss'
import { useParams } from 'react-router-dom'
import { Review } from '../../components/Review/Review'
import { UserContext } from '../../context/UserContextProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Stationpage = () => {

    const { id } = useParams()
    const { user } = useContext(UserContext)

    const [stationData, setStationData] = useState()
    const [stationReviews, setStationReviews] = useState()

    const path = '/src/assets/images/'

    const [stars, setStars] = useState(0)
    const [comment, setComment] = useState('')

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3000/orgs/${id}`)
            .then(res => res.json())
            .then(data => setStationData(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setStationReviews(data))
    }, [refresh])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!user) {
            toast('Du skal være logget ind for at lave en anmeldelse')
            return
        }

        if (comment === '') {
            toast('Udfyld kommentarfeltet')
            return
        }
        if (stars === 0) {
            toast('Angiv stjerner')
            return
        }

        submit()
    }

    const submit = () => {

        const body = new URLSearchParams()

        body.append('org_id', id)
        body.append('subject', 'Pants Forges application')
        body.append('comment', comment)
        body.append('num_stars', stars)
        body.append('date', new Date().toUTCString())

        const options = {
            method: 'POST',
            body: body,
            headers: {
                Authorization: `Bearer ${user.access_token}`
            }
        }


        fetch('http://localhost:3000/reviews', options)
            .then(res => res.json())
            .then(data => {
                toast('Andmeldelse oprettet')
                setComment('')
                setStars(0)
                setRefresh(!refresh)
            })
    }

    return (
        <>
            <div className={style.wrapper}>
                {stationData ?
                    <>
                        <img src="/src/assets/images/map2.png" alt="Location" className={style.location} />
                        <div className={style.info}>
                            <h1>{stationData.name}</h1>
                            <h2>{stationData.address}</h2>
                            <p>{stationData.zipcode} {stationData.city}</p>
                            <p>{stationData.country}</p>
                        </div>
                        <hr />
                        <div className={style.reviewWrapper}>
                            <div className={style.addReview}>
                                <div className={style.stars}>
                                    <h2>Skriv en kommentar</h2>
                                    <div className={style.starImgs}>
                                        <img
                                            onClick={() => setStars(1)}
                                            src={stars >= 1 ? `${path}${'full_star.png'}` : `${path}${'empty_star.png'}`}
                                            alt="star" />
                                        <img
                                            onClick={() => setStars(2)}
                                            src={stars >= 2 ? `${path}${'full_star.png'}` : `${path}${'empty_star.png'}`}
                                            alt="star" />
                                        <img
                                            onClick={() => setStars(3)}
                                            src={stars >= 3 ? `${path}${'full_star.png'}` : `${path}${'empty_star.png'}`}
                                            alt="star" />
                                        <img
                                            onClick={() => setStars(4)}
                                            src={stars >= 4 ? `${path}${'full_star.png'}` : `${path}${'empty_star.png'}`}
                                            alt="star" />
                                        <img
                                            onClick={() => setStars(5)}
                                            src={stars >= 5 ? `${path}${'full_star.png'}` : `${path}${'empty_star.png'}`}
                                            alt="star" />
                                    </div>
                                </div>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <textarea rows="5" value={comment} onChange={(e) => setComment(e.target.value)} />
                                    <input type="submit" value="Kommenter" />
                                </form>
                            </div>
                            <div className={style.reviews}>

                                {stationReviews ?
                                    <>
                                        {stationReviews.length ?
                                            <>
                                                {
                                                    stationReviews.map((review) => {
                                                        return <Review key={review.id} content={review} />
                                                    })
                                                }
                                            </>
                                            :
                                            <p style={{ textAlign: 'center' }}>Ingen reviews</p>
                                        }
                                    </>
                                    :
                                    <>Loading...</>
                                }

                            </div>
                        </div>
                    </>
                    :
                    <>Loading...</>
                }

            </div>
            <img style={{width: '100%'}} src="/src/assets/images/layout/bg-wave-1.svg" alt="" />
            <ToastContainer />
        </>
    )
}
