import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from "./ToDo_practice/ToDoList";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
const h3 = React.createElement(
    "h3",
    {
        onClick: () => console.log("click"),
    }  ,
    "Hello im a span"
);
root.render(

    <ToDoList/>
);

reportWebVitals();


