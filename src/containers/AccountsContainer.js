import React from 'react'
import {connect} from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountInput from '../components/AccountInput'

class AccountsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {accounts: [], totalBalance: 0}
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/accounts')
    .then(resp => resp.json())
    .then(accounts => {
      let total = this.totalBalance(accounts)
      this.setState({
        accounts: accounts,
        totalBalance: total
      })
    })
  }

  totalBalance = (accounts) => {
    let total = 0
    accounts.map(a => total += a.balance)
    return total
  }

  addToTotalBalance = (account) => {
    let total = 0
    this.state.accounts.map(a => a.id != account.id ? total += a.balance : 0)
    total += account.balance
    return total
  }

  handleSubmitAccount = (account) => {
    // event.preventDefault()
      fetch('http://localhost:3000/api/v1/accounts', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(account)
      })
      .then(response => response.json())
      .then(account => {
        let total = this.addToTotalBalance(account)
        this.setState({accounts: [...this.state.accounts, account], totalBalance: total})
        this.props.history.push(`/accounts/${account.id}`)
      })
  }

  handleSubmitTransaction = (transaction, accountId) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/transactions`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(transaction)
    })
    .then(response => response.json())
    .then(account => {

      let total = this.addToTotalBalance(account)
      this.setState({accounts: this.state.accounts.map(a => a.id == account.id ? account : a), totalBalance: total})
      this.props.history.push(`/accounts/${accountId}`)
    })
  }


  render() {
      return (
          <span>
            <span style={{display: 'inline', float: 'right'}}>Total Balance: ${this.state.totalBalance}</span>
            <Switch>
                <Route path='/accounts/new' render={(rProps) => <AccountInput handleSubmit={this.handleSubmitAccount}/>}/>
                <Route path='/accounts/:id' render={(rProps) => <Account {...rProps} handleSubmit={this.handleSubmitTransaction} accounts={this.state.accounts}/>}/>
                <Route exact path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.state.accounts}/>}/>
            </Switch>
          </span>
      )
  }
}

// const mapStateToProps = state => {
//   return {
//     accounts: state.accounts,
//     totalBalance: state.totalBalance
//   }
// }

// export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
export default withRouter(AccountsContainer)
