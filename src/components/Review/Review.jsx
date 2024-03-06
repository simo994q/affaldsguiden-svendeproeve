import React from 'react'
import style from './Review.module.scss'

export const Review = ({ content }) => {

    const { comment, created_at, user } = content

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.fakeImg} />
                <div className={style.content}>
                    <div>
                        <p>{user.firstname}</p>
                        <p>{new Date(created_at).toLocaleDateString()}</p>
                    </div>
                    <p className={style.comment}>{comment}</p>
                </div>
            </div>
        </>
    )
}
