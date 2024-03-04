import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SortingCard } from '../../components/SortingCard/SortingCard'

export const Searchpage = () => {

    const { query } = useParams()

    const [results, setResults] = useState()

    useEffect(() => {
        fetch(`http://localhost:3000/search/${query}`)
            .then(res => res.json())
            .then(data => setResults(data))
    }, [])

    console.log(results)

    return (
        <>
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
