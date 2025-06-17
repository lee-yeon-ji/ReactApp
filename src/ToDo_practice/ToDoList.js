import {useState, useEffect, use} from "react";
import button from "../Button";

function ToDoList(){
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    return(
        <div>
            <h1>My To do({toDos.length})</h1>
        </div>
    )
}

export default ToDoList;