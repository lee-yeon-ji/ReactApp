import {useState, useEffect, use} from "react";


function ToDo() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }

        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };

    console.log(toDos);

    return (
        <div>
            {/*//todos 리스트의 갯수 ()안에 {}넣는 이유는 js문법을 사용하기 때문*/}
            <h1>My To dos({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do.."
                />
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    )
}


export default ToDo;


