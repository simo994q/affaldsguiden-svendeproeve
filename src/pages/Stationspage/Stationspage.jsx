import React, { useEffect, useState } from 'react'
import style from './Stationspage.module.scss'
import { StationCard } from '../../components/StationCard/StationCard'

export const Stationspage = () => {

  const [stations, setStations] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/orgs?attributes=id,name,address,zipcode,city,longtitude,latitude')
      .then(res => res.json())
      .then(data => setStations(data))
  }, [])

  return (
    <>
      <div className={style.wrapper}>

        {stations ?
          <>
            {stations.map((station) => {
              return <StationCard key={station.id} details={station} />
            })}
          </>
          :
          <>Loading...</>
        }

      </div>
    </>
  )
}
