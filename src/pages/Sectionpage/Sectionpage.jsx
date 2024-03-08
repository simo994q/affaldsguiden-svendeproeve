import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Sectionpage.module.scss'
import { DetailsAccordion } from '../../components/DetailsAccordion/DetailsAccordion'

export const Sectionpage = () => {

    const { section_id } = useParams()

    const [sectionData, setSectionData] = useState()
    const [sectionCategories, setSectionCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/section/${section_id}`)
            .then(res => res.json())
            .then(data => setSectionData(data))
    }, [])

    useEffect(() => {
        if (sectionData) {
            Promise.all(sectionData.categories.map(async (category) => {
                return fetch(`http://localhost:3000/category/details/${category.id}`)
                    .then(res => res.json())
            })).then(data => setSectionCategories(data))
        }
    }, [sectionData])

    return (
        <>
            {sectionData ?
                <>
                    <div className={style.wrapper}>
                        <div style={{ backgroundColor: `#${sectionData.color}` }} className={style.header}>
                            <h1>{sectionData.title}</h1>
                            <img src={sectionData.filepath} alt="" />
                        </div>
                        <div className={style.detailsWrapper}>
                            {sectionCategories.length ?
                                <>
                                    {sectionCategories.map((item) => {
                                        return <DetailsAccordion key={item.id} details={item} />
                                    })}
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
            <img style={{width: '100%'}} src="/src/assets/images/layout/bg-wave-1.svg" alt="" />
        </>
    )
}
