import React from 'react'
import {Route, Link, Redirect } from 'react-router-dom';


const Transaction = (props) => {

  return (
    <div>
      {props.transaction.kind} - {props.transaction.amount}
    </div>

  )
}

export default Transaction
