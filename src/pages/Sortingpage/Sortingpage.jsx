import React, { useEffect, useState } from 'react'
import style from './Sortingpage.module.scss'
import { SortingCard } from '../../components/SortingCard/SortingCard'
import { useNavigate } from 'react-router-dom'

export const Sortingpage = () => {

  const [sections, setSections] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/section')
      .then(res => res.json())
      .then(data => setSections(data))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()

    console.log(e.target.search.value);
    navigate(`/sorting/search/${e.target.search.value}`)

  }

  return (
    <>
      <div className={style.hero}>
        <h1>Din guide</h1>
        <h2>Til en sund affaldssortering</h2>
        <form onSubmit={(e) => handleSearch(e)}>
          <input type="text" name='search' placeholder='Søg på affald' />
        </form>
      </div>
      <div className={style.cards}>
        {sections ?
          <>
            {sections.map((section) => {
              return <SortingCard key={section.id} data={section} />
            })}
          </>
          :
          <>Loading...</>
        }
      </div>
      <img style={{ width: '100%' }} src="/src/assets/images/layout/bg-waves-1.svg" alt="" />
    </>
  )
}
