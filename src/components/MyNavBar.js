import React from 'react'
import {Route, Link } from 'react-router-dom';

const MyNavBar = (props) => {

  return (
    <span>
      <Link to='/'>Home </Link>
      <Link to='/accounts'>Accounts </Link>
      <Link to='/accounts/new'> New Account</Link>
    </span>

  )
}

export default MyNavBar
