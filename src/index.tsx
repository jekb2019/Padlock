import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';
import {LockService} from './service/lockService';

// Create new Lock Service Instance
const lockService: LockService = new LockService('123');

ReactDOM.render(
  <React.StrictMode>
    <App service={lockService}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
