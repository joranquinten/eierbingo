import React, { Component } from 'react';

import CheckCode from './components/codes/CheckCode';
import Bingo from './components/codes/Bingo';

import sun from './sun.svg';
import './App.css';

// App component, combines the components to an app
class App extends Component {

  constructor(props) {
    super(props);
    
    // Manual bind (autobinding is provided via React.createClass())
    this._checkCode = this._checkCode.bind(this); 
    this.state = {
        userCode: ''
    };
  }

  render() {

    const validateCode = (this.state.userCode) ? null : <Bingo eggCode={ this.state.userCode } /> ; 

    return (
      <div className="App">
        <div className="App-header">
          <img src={sun} className="App-logo" alt="This is the sun!" />
          <h2>Dutch Weather Complain Service</h2>
          <div className="App-logo"></div>
        </div>


        <CheckCode checkCode = { this._checkCode } />

        { validateCode }
        
      </div>
    );
  }

  /*
    Expects a comment object with a name and comment
  */
  _checkCode(code) {

    // Update the state
    this.setState({ userCode: code });
  }

}

export default App;
