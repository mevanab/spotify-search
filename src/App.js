import React, { Component } from 'react';
import Main from './components/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider> 
            <Main />
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;