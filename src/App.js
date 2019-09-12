import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AccountsContainer from './containers/AccountsContainer'
import MyNavBar from './components/MyNavBar'
import HomePage from './components/HomePage'


class App extends React.Component {

  render() {
    return (
      <div style={{margin: '20px'}}>
        <Router>
            <MyNavBar/>
            <AccountsContainer/>
            <Route exact path='/' component={HomePage}/>
        </Router>
      </div>
    );
  }
}


export default App;
