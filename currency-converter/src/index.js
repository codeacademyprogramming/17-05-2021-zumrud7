import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import CurrencyConverter from "./component/CurrencyConverter/index";
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Select from './component/CurrencyConverter/Select';

ReactDOM.render(
  <React.StrictMode>
    <CurrencyConverter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
