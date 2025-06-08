
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import "./styles.css";

// 브라우저 화면이 보여질 부분

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
