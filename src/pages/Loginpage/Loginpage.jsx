import React, { useContext, useState } from 'react'
import style from './Loginpage.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../context/UserContextProvider';

export const Loginpage = () => {

  const { user, setUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (email === '' || pass === '') {
      toast('Udfyld begge felter')
      return
    }

    const body = new URLSearchParams()

    body.append('username', email)
    body.append('password', pass)

    const options = {
      method: 'POST',
      body: body
    }

    fetch('http://localhost:3000/login', options)
      .then(res => res.json())
      .then(data => setUser(data))

  }

  return (
    <>
      {user ?
        <>
          <div className={style.logout}>
            <h1>logget ind som {user.user.firstname}</h1>
            <button onClick={() => setUser()}>Log ud</button>
          </div>
        </>
        :
        <>
          <div className={style.wrapper}>
            <div className={style.textWrapper}>
              <div>
                <img src="/src/assets/images/layout/logo.svg" alt="" />
                <h2>Affaldsguiden</h2>
              </div>
              <p>Log ind på affaldsguiden for at anmelde stationer</p>
            </div>
            <form onSubmit={(e) => handleLogin(e)}>
              <h1>Log ind</h1>
              <input type="text" placeholder='E-mail' className={style.inputField} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Password' className={style.inputField} onChange={(e) => setPass(e.target.value)} />
              <input type="submit" value="Log ind" className={style.submitButton} />
            </form>
          </div>
        </>

      }

      <ToastContainer />
    </>
  )
}
