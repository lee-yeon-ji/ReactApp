
import React from 'react';
import ReactDOM from 'react-dom';
import Movie from "./Movie";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";

// 브라우저 화면이 보여질 부분
//처음 시작할 때만 component render가 실행되고 그 이후에는 실행이 되지 않도록 하는 방법

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Movie/>
);

reportWebVitals();


