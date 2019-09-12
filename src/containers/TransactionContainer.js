import React from 'react'
import {connect} from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom';
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transactions'


class TransactionContainer extends React.Component {

  renderRoutes = () => {
    if (this.props.account) {
      return (
        <div>
          <Route path="/accounts/:id/transactions/new" render={(rProps) => <TransactionInput history={this.props.history} account={this.props.account}/>}/>
          <Link to={`/accounts/${this.props.account.id}/transactions/new`}>New Transaction</Link>
          {this.props.urlMatch.isExact ? <Transactions transactions={this.props.account.transactions}/>: null}
        </div>
      )
    } else {
      return null
    }

  }

  render() {
      return (
          <div>
            {this.renderRoutes()}
          </div>
      )
  }
}



export default TransactionContainer
