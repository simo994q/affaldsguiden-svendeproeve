import React from 'react'
import { useParams } from 'react-router-dom'

export const Stationpage = () => {

    const { id } = useParams()

    return (
        <>
            {id}
        </>
    )
}
