import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from "./ToDo_practice/ToDoList";

import CoinList from "./Coin_practice/CoinList";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <ToDoList/>
  <CoinList/>
);

reportWebVitals();


