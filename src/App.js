import React, { Component } from 'react';
import Search from './components/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider> 
            <Search />
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;