import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { defState } from '../reducers/Reducer'
function Smth() {
  function addSmth(eshe: number) {
    dispatch({ type: 'INCREMENT', payload: eshe })
  }
  const [state, setstate] = useState([])
  const [smth1, setsmth] = useState(10)
  const dispatch = useDispatch()
  const smth = useSelector((state: defState) => state)
  console.log(smth)
  useEffect(() => {}, [smth1])
  return (
    <>
      <button onClick={() => setsmth(smth1 + 1)}>{smth1}</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {Object.entries(smth).map((item, index, array) => (
        <h1 key={index}>{item[1]}</h1>
      ))}
      <button onClick={() => addSmth(Math.round(Math.random() * 150))}>
        ADD
      </button>
    </>
  )
}

export default Smth
