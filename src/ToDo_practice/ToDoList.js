import {useState, useEffect, use} from "react";
import button from "../Button";
import {logDOM} from "@testing-library/react";


function ToDoList(){
    //빈배열 생성
    const [toDo, setToDo] = useState("");
    const Title = (
        <h3 id="title" onClick={()=> console.log("click")}>
            click me
        </h3>
    );

    return(

            <div>



            </div>

    )
}

export default ToDoList;