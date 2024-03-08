import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SortingCard } from '../../components/SortingCard/SortingCard'
import style from './Searchpage.module.scss'
import { useNavigate } from 'react-router-dom'

export const Searchpage = () => {

    const { query } = useParams()
    const navigate = useNavigate();

    const [results, setResults] = useState()
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3000/search/${query}`)
            .then(res => res.json())
            .then(data => setResults(data))
    }, [refresh])

    const handleSearch = (e) => {
        e.preventDefault()
        setRefresh(!refresh)

        console.log(e.target.search.value);
        navigate(`/sorting/search/${e.target.search.value}`)
    }

    console.log(results)

    return (
        <>
            <div className={style.hero}>
                <h1>Din guide</h1>
                <h2>Til en sund affaldssortering</h2>
                <form onSubmit={(e) => handleSearch(e)}>
                    <input type="text" name='search' placeholder='Søg på affald' />
                </form>
            </div>
            {results ?
                <>
                    {
                        results.num_result !== 0 ?
                            <>
                                <h1>Din søgning gav {results.num_result} resultater</h1>
                                <div>
                                    {results.data.map((result) => {

                                    })}
                                </div>
                            </>
                            :
                            <>
                                <h1>Din søgning gav ingen resultater</h1>
                            </>
                    }
                </>
                :
                <>Loading...</>
            }
        </>
    )
}
