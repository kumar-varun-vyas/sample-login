import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Register from './register'
import './register.css';


ReactDOM.render(
  <React.Fragment>
    {/* this is for Login page */}
    <App />
    {/* want to see Resister then uncomment the <Resister />  */}
   {/* <Register /> */}
  </React.Fragment>,
  document.getElementById('root')
);

