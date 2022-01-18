import { element } from 'prop-types'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { defState, Exit } from '../reducers/Reducer'
import Login from './Login'
import Registration from './Registration'

const Authorization = () => {
  //  const isAuth = useSelector((state: defState) => state.isAuth)
  const [isAuth, setisAuth] = useState(!!localStorage.getItem('Auth'))
  function changeAuth() {
    setisAuth((prev) => !prev)
  }
  function exit() {
    localStorage.removeItem('Auth')
    setisAuth((prev) => !prev)
  }
  console.log(
    JSON.parse(
      localStorage.getItem(JSON.parse(localStorage.getItem('Auth') || '')) || ''
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
          <button onClick={exit}>Выход</button>
          <pre>
            {Object.entries(
              JSON.parse(
                localStorage.getItem(
                  JSON.parse(localStorage.getItem('Auth') || '')
                ) || ''
              )
            ).map((element) => element + '\n')}
          </pre>
        </>
      )}
    </>
  )
}

export default Authorization
