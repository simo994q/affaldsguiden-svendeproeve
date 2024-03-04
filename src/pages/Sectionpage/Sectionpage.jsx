import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Sectionpage = () => {

    const { section_id } = useParams()

    useEffect(() => {
        console.log(section_id);
    }, [])

    return (
        <div>Sectionpage</div>
    )
}
