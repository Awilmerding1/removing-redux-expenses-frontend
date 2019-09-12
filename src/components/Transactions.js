import React from 'react'
import Transaction from './Transaction'
import { Route, Link } from 'react-router-dom';

const Transactions = (props) => {

  return (
    <div>
      {props.transactions.map(transaction =>
       <Transaction key={transaction.id} transaction={transaction}/>)}
    </div>

  )
}

export default Transactions
