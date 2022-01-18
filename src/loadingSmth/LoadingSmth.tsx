import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import TestAraJan from './TestAraJan'
import TestAraYol from './TestAraYol'
let userNumber = 1
function changeNumber() {
  return ++userNumber
}

const LoadingSmth = () => {
  const [state, setstate] = useState([{}])
  function fetchData(userNumber: number, render: boolean) {
    render = false
    fetch(`https://jsonplaceholder.typicode.com/todos/${userNumber}`)
      .then((response) => response.json())
      .then((json) => {
        setstate(
          Boolean(Object.keys(state[0]).length) && Object.keys(json).length
            ? [...state, json]
            : Object.keys(json).length
            ? [json]
            : [...state]
        )
      })
  }
  let render = true
  useEffect(() => {
    fetchData(userNumber, render)
    changeNumber()
  }, [])
  console.log('render')
  return (
    <>
      <button
        onClick={() => {
          if (render) {
            render = false
            fetchData(userNumber, render)
            changeNumber()
          }
        }}
      >
        New User
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Routes>
        <Route element={<TestAraYol></TestAraYol>} path='/'></Route>
        <Route element={<TestAraJan></TestAraJan>} path='/test1'></Route>
        <Route element={<ErrorPage></ErrorPage>} path='*'></Route>
      </Routes>
    </>
  )
}

export default LoadingSmth
