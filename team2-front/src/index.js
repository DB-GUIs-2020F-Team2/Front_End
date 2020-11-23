import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './register/register';
import * as serviceWorker from './serviceWorker';
import Contractor from './contractor/contractor'
import Directory from './contractor/directory'
import Profile from './contractor/profile'
import Project from './contractor/project'

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    
    <Project />
  </React.StrictMode>,
  document.getElementById('root')
);
//<Register />
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
