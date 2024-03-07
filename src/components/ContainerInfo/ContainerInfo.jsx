import React, { useEffect, useState } from 'react'
import style from './ContainerInfo.module.scss'
import { ContainerType } from '../ContainerType/ContainerType'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContainerInfo = ({ selected, setSelected, setStep }) => {

  const [types, setTypes] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/containers')
      .then(res => res.json())
      .then(data => setTypes(data))
  }, [])

  return (
    <>
      <div className={style.wrapper}>
        <h2>Trin 1</h2>
        <h1>Vælg type</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nam mollitia enim blanditiis, asperiores laboriosam tempora, nulla fugiat totam veritatis molestiae numquam. Eligendi nostrum quis a, voluptatem laudantium nemo accusamus?</p>
        <div className={style.containers}>
          {types ?
            <>
              {types.map((type) => {
                return <ContainerType key={type.id} data={type} selected={selected} setSelected={setSelected} />
              })}
            </>
            :
            <>Loading...</>
          }
        </div>
        <button className={style.next}
          onClick={() => {
            if (selected) {
              setStep(2)
            } else {
              toast('Vælg type for at gå videre')
            }
          }}
        >Videre</button>
      </div>
      <ToastContainer />
    </>
  )
}
