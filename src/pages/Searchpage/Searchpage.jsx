import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Searchpage = () => {

    const { query } = useParams()

    useEffect(() => {
        console.log(query);
    }, [])

    return (
        <div>Searchpage</div>
    )
}
