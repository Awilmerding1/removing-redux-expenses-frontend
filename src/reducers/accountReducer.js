
export default function accountReducer(state = {accounts: [], totalBalance: ''}, action) {
      let total = 0
  switch (action.type) {
    case 'FETCH_ACCOUNTS':

      action.payload.map(a => total += a.balance)
      return {...state, accounts: action.payload, totalBalance: total}
    case 'ADD_ACCOUNT':

        state.accounts.map(a => total += a.balance)
        total += action.payload.balance
      return {...state, accounts: [...state.accounts, action.payload]}
      case 'ADD_TRANSACTION':
    
          state.accounts.map(a => total += a.balance)
          total += action.payload.balance
        return  {...state, accounts: state.accounts.map(account => {
          if (account.id === action.payload.id ) {
            return action.payload
          } else {
            return account
          }
        })}
    default:
      return state
  }
}
