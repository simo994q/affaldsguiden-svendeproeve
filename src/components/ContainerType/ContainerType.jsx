import React from 'react'
import style from './ContainerType.module.scss'

export const ContainerType = ({ data, selected, setSelected }) => {

  console.log(data);

  return (
    <>
      <div
        onClick={() => setSelected(data.id)}
        className={style.wrapper}>
        <div
          // style={{ backgroundColor: selected === data.id ? '#0075ee' : '#F9F9F9' }}
          className={style.selected}>
          <div
          style={{ backgroundColor: selected === data.id ? '#0075ee' : '#F9F9F9' }}
          />
        </div>
        <img src={`/src/assets/images/icons/${data.icon_filename}`} alt="" />
        <h1>{data.name}</h1>
      </div>
    </>
  )
}
