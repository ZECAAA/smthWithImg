import React from 'react'
import classes from './navbar.module.scss'
import logo from '../assets/mygamesLogo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  let links = ['Home', 'Login', 'Stats', 'Game'].map(function (element) {
    if (element !== 'Home') {
      return (
        <Link
          key={element}
          className={
            useLocation().pathname == '/' + element
              ? classes.active
              : classes.standart
          }
          to={'/' + element}
        >
          {element}
        </Link>
      )
    } else {
      return (
        <Link
          key={element}
          className={
            useLocation().pathname == '/'
              ? classes.active + ' ' + classes.home
              : classes.standart + ' ' + classes.home
          }
          to={'/'}
        >
          {element}
        </Link>
      )
    }
  })
  return (
    <div className={classes.navbar}>
      <img className={classes.logo} src={logo}></img>
      {links}
    </div>
  )
}

export default Navbar
