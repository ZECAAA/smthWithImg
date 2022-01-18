import React from 'react'
import classes from './juj.module.scss'
import ssr from './I.png'
const Juj = () => {
  return (
    <div className={classes.gass}>
      <img src={ssr} alt="" />
      <button onClick={(): void => alert('pip')}>ghdfhdfghdf</button>
    </div>
  )
}

export default Juj
