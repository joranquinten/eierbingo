import React, { Component } from 'react';

import CheckCode from './components/codes/CheckCode';
import Bingo from './components/codes/Bingo';

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

    let validateCode = (this.state.userCode === '') ? null : <Bingo eggCode={ this.state.userCode } /> ; 

    return (
      <div className="App">
        <div className="App-header">
          <h1>Eierbingo!</h1>
          <p className="App-intro">
            Welkom op de Nederlandse Eierbingo, waar een bespoten ei je prijzen bezorgt!<br/>
          </p>
          <p className="App-disclaimer">
            <em>Voor de actuele lijst en berichtgeving, bezoek de website van de <a href="https://www.nvwa.nl/onderwerpen/biociden/fipronil-in-eieren/eicodelijst" title="De actuele lijst met codes op de website van de NVWA.">Nederlandse Voedsel en Waren Autoriteit</a>.</em>
          </p>
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
    
    this.setState({ userCode: '' });

    // Update the state
    this.setState({ userCode: code });
    
  }

}

export default App;
