import { element } from 'prop-types'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { defState, Exit } from '../reducers/Reducer'
import Login from './Login'
import Registration from './Registration'
import classes from './authorization.module.scss'
const Authorization = () => {
  //  const isAuth = useSelector((state: defState) => state.isAuth)
  const [isAuth, setisAuth] = useState(!!localStorage.getItem('Auth'))
  console.log(isAuth)
  function changeAuth() {
    setisAuth((prev) => !prev)
  }
  function exit() {
    localStorage.removeItem('Auth')
    setisAuth((prev) => !prev)
  }
  console.log(
    JSON.parse(
      localStorage.getItem(
        JSON.parse(localStorage.getItem('Auth') || JSON.stringify('Test'))
      ) || JSON.stringify('Test')
    )
  )
  return (
    <>
      {!isAuth && (
        <>
          <Login changeAuth={changeAuth}></Login>
          <Registration changeAuth={changeAuth}></Registration>
        </>
      )}
      {isAuth && (
        <>
          <div className={classes.wrappExit}>
            <button className={classes.exitButton} onClick={exit}>
              Выход
            </button>
          </div>
          <pre className={classes.smth}>
            {Object.entries(
              JSON.parse(
                localStorage.getItem(
                  JSON.parse(localStorage.getItem('Auth') || JSON.stringify(''))
                ) || JSON.stringify('')
              )
            ).map((element) => element + '\n')}
          </pre>
        </>
      )}
    </>
  )
}

export default Authorization
