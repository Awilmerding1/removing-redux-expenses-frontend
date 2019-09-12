import React from 'react'
import {connect} from 'react-redux'
import {addTransaction} from '../actions/addTransaction'


class TransactionInput extends React.Component {

  state = {
    kind: "deposit",
    amount: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTransaction(this.state, this.props.account.id, this.props.history)
    this.setState({
      kind: 'deposit',
      amount: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Transaction Type:</label>
          <select name="kind" onChange={this.handleChange} value={this.state.kind}>
            <option>deposit</option>
            <option>withdraw</option>
          </select>
          <label>Transaction Amount:</label>
          <input onChange={this.handleChange} name="amount" type="text" value={this.state.amount}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addTransaction})(TransactionInput)
