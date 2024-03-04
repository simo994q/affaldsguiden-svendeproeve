import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Sectionpage.module.scss'

export const Sectionpage = () => {

    const { section_id } = useParams()

    const [sectionData, setSectionData] = useState()
    const [sectionCategories, setSectionCategories] = useState()

    useEffect(() => {
        fetch(`http://localhost:3000/section/${section_id}`)
            .then(res => res.json())
            .then(data => setSectionData(data))
    }, [])

    useEffect(() => {
        if (sectionData) {
            let empty = []
            sectionData.categories.map((cat) => {
                fetch(`http://localhost:3000/category/details/${cat.id}`)
                    .then(res => res.json())
                    .then(data => { empty.push(data), setSectionCategories(empty) })
            })
        }
    }, [sectionData])

    console.log(sectionData);
    console.log(sectionCategories);

    return (
        <>
            {sectionData ?
                <>
                    <div className={style.wrapper}>
                        <div style={{backgroundColor: `#${sectionData.color}`}} className={style.header}>
                            <h1>{sectionData.title}</h1>
                            <img src={sectionData.filepath} alt="" />
                        </div>
                    </div>
                </>
                :
                <>Loading...</>
            }
        </>
    )
}
