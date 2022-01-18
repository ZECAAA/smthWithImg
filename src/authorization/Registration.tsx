import React, { useState } from 'react'
import classes from './login.module.scss'
import PropTypes from 'prop-types'
import { Auth } from '../reducers/Reducer'
import { useDispatch } from 'react-redux'

const Registration = (props: { changeAuth(): void }) => {
  //const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function sf(e: React.FormEvent): void {
    e.preventDefault()
    const obj = {
      email,
      password,
    }
    localStorage.setItem(
      String('User #' + (localStorage.length + 1)),
      JSON.stringify(obj)
    )
    localStorage.setItem(
      String('Auth'),
      JSON.stringify('User #' + localStorage.length)
    )
    props.changeAuth()
    //dispatch(Auth())
    setEmail('')
    setPassword('')
  }
  return (
    <div className={classes.login1}>
      <form className={classes['login-form']} onSubmit={sf}>
        <p>Registration</p>
        <input
          className='login__email'
          type='email'
          placeholder='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='username'
        ></input>
        <input
          className='login__password'
          placeholder='password'
          required
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='current-password'
        ></input>
        <button className='login__submit' type='submit'>
          submit
        </button>
      </form>
    </div>
  )
}

export default Registration

Registration.propTypes = {
  changeAuth: PropTypes.func.isRequired,
}
