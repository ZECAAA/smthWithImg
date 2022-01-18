import React, { useState } from 'react'
import classes from './login.module.scss'
import PropTypes from 'prop-types'
import { Auth } from '../reducers/Reducer'
import { useDispatch } from 'react-redux'
const Login = (props: { changeAuth(): void }) => {
  //const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function getData() {
    const arrayUser = []
    for (let index = 1; index < localStorage.length + 1; index++) {
      arrayUser[index - 1] = JSON.parse(
        localStorage.getItem('User #' + index) || ''
      )
    }
    return arrayUser
  }
  function sf(e: React.FormEvent): void {
    e.preventDefault()
    const users: { email: string; password: string }[] = getData()
    let smth = false
    for (let index = 0; index < users.length; index++) {
      if (users[index].email === email && users[index].password === password) {
        smth = !smth
        localStorage.setItem(
          String('Auth'),
          JSON.stringify('User #' + localStorage.length)
        )
        props.changeAuth()
        //dispatch(Auth())
        setEmail('')
        setPassword('')
      } else {
        continue
      }
    }
    if (!smth) {
      alert('не угадал')
    }
  }
  return (
    <div className={classes.login}>
      <form className={classes['login-form']} onSubmit={sf}>
        <p>Login</p>
        <input
          className='login__email'
          type='email'
          placeholder='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='username'
        ></input>
        <input
          className='login__password'
          placeholder='password'
          type='password'
          value={password}
          required
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

export default Login

Login.propTypes = {
  changeAuth: PropTypes.func.isRequired,
}
