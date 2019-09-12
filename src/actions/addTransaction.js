export const addTransaction = (data, accountId, history) => {


  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/transactions`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => {
      dispatch({type: 'ADD_TRANSACTION', payload: account})
      history.push(`/accounts/${accountId}`)
    })
  }

}
