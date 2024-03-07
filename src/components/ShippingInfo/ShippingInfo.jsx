import React, { useState, useContext } from 'react'
import style from './ShippingInfo.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../context/UserContextProvider';

export const ShippingInfo = ({ selected }) => {

  const { user } = useContext(UserContext)

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }

    const body = new URLSearchParams()

    body.append('fullname', name)
    body.append('address', address)
    body.append('zipcode', zip)
    body.append('city', city)
    body.append('email', email)
    body.append('phone', phone)
    body.append('container_id', selected)

    const options = {
      method: 'POST',
      body: body,
      headers: {
        Authorization: `Bearer ${user.access_token}`
      }
    }

    fetch('http://localhost:3000/orders', options)
      .then(res => res.json())
      .then(data => console.log(data))

  }

  return (
    <>
      <div className={style.wrapper}>
        <h2>Trin 2</h2>
        <h1>Hvor skal den leveres?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nam mollitia enim blanditiis, asperiores laboriosam tempora, nulla fugiat totam veritatis molestiae numquam. Eligendi nostrum quis a, voluptatem laudantium nemo accusamus?</p>
        <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
          <input type="text" placeholder='Fulde navn' onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Adresse' onChange={(e) => setAddress(e.target.value)} />
          <input type="text" placeholder='Postnummer' onChange={(e) => setZip(e.target.value)} />
          <input type="text" placeholder='By' onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Telefon' onChange={(e) => setPhone(e.target.value)} />
        </form>
        <button className={style.next}
          onClick={() => {
            if (!user) {
              toast('Du skal være logget ind')
            } else {
              if (
                name !== '' &&
                address !== '' &&
                zip !== '' &&
                city !== '' &&
                email !== '' &&
                phone !== ''
              ) {
                handleSubmit()
              } else {
                toast('Udfyld alle felter')
              }
            }
          }}
        >Send</button>
      </div>
      <ToastContainer />
    </>
  )
}
