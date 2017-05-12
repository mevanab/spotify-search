import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
Needed for onTouchTap
Temporarily used for Material-UI until official React version is released 
http://stackoverflow.com/a/34015469/988941
*/
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
