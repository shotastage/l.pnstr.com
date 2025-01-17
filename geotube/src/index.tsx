import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <Suspense fallback={(<div>Now loading...</div>)}>
        <Router/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
