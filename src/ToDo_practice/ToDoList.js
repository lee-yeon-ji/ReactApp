import {useState} from "react";
import Button from "../Button";



function ToDoList(){
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => setText(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(text === ""){
            return;
        }
        setText("");
        setToDos((currentArray) => [text, ...currentArray]);
    };
    console.log( toDos.map((item, index) => <li key={index}>{item}</li>));

    return(
        <div>
            <h1>to do list({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={text} type="text" placeholder="write your to do..."/>
                <Button text={"submit"}/>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)}


            </ul>
        </div>
    )
}

export default ToDoList;




//     const [todo, setToDo] = useState("");
//     const [toDoList, setToDoList] = useState([]);
//
//     const onChange = (event) => setToDo(event.target.value);
//     const onSubmit = (event) => {event.preventDefault();
//
//         if(todo === ""){
//             return;
//         }
//         setToDo("");
//         setToDoList((currentArray)=>[todo, ...currentArray]);
//     };
//
//
//     console.log(toDoList)
//     console.log(toDoList.map((item, index) => <li key={index}>{item}</li>))
//     return(
//         <div>
//             <h1>TO DO LIST({toDoList.length})</h1>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={todo} type="text" placeholder="write..."/>
//                 <button>submit</button>
//             </form>
//             <hr/>
//             <ul>
//                 {toDoList.map((item, index) => <li key={index}>{item}</li>)}
//             </ul>
//         </div>
//     )
// }
//
// export default ToDoList;
//
//












//
// function ToDoList(){
//     const [text, setText] = useState("");
//     const [toText, setToText] = useState([]);
//     const onChange = (event) => setText(event.target.value);
//     const onSubmit = (event) => {event.preventDefault();
//         if(text === ""){
//             return;
//         }
//
//         setToText((currentArray) => [text, ...currentArray]);
//         setText("");
//     };
//
//     console.log(toText);
//
//     return(
//
//         <div>
//             <h1>To Dos({toText.length})</h1>
//             <form onSubmit={onSubmit} >
//
//                 <input value={text} onChange={onChange} type="text" placeholder = "write..."/>
//                 <button>submit</button>
//             </form>
//             <hr/>
//             <ul>
//                 {toText.map((item , index) => <li key={index}>{item}</li>)}
//             </ul>
//
//         </div>
//     )
//
//
//
// }
//
//
// export default ToDoList;
//
//
//
//
















































//
//
//
// function ToDoList(){
//     const [text, setText] = useState("");
//     const [toText, setToText] = useState([]);
//     const onChange = (event) => setText(event.target.value);
//     const onSubmit = (event) => {event.preventDefault();
//         if (text === ""){
//             return;
//         }
//         setToText((currentArray) => [text, ...currentArray]);
//         setText("");
//     };
//     console.log(toText)
//     return(
//         <div>
//             <h1>My To Dos ({toText.length})</h1>
//             <form onSubmit={onSubmit}>
//                 <input value={text} onChange={onChange} type="text" placeholder ="write your to do..."/>
//                 <button>submit</button>
//             </form>
//         </div>
//     )
//
// }
//
//
//
//
// export default ToDoList;
//
//
//
//
//
//
//
//































// function ToDoList(){
//
//     // counter은 데이터 setValues는 데이터를 수정하기 위한 함수 결과값은 counter의 배열.
//     const [counter, setValues] = useState(0);
//
//     const [keyword, setKeyword] = useState("");
//
//     // 이벤트 바인딩을 줄 때 해당하는 이벤트 앞에 on을 붙여서 행동을 적음.
//     const onClick = () => setValues((prev) => prev + 1);
//     const onChange = (event) => setKeyword(event.target.value);
//
//     useEffect(() => {
//         console.log("counter")
//     }, [counter]);
//
//     useEffect(() => {
//         console.log("for", keyword);
//
//     }, [keyword]);
//     return(
//         <div>
//             <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
//             {/* {}의 안에 JavaScript 변수를 HTML에 삽입, javascript 코드를 실행*/}
//             <h1>{counter}</h1>
//             <button onClick={onClick}>click me</button>
//         </div>
//     )
//
// }
//
// export default ToDoList;


// function ToDoList(){
//     const [counter, setCounter] = useState(0);
//     const [keyword, setKeyword] = useState("");
//     const onClick = () => setCounter((prev) => prev +1);
//     const onChange = (event) => setKeyword(event.target.value);
//
//     useEffect(() => {
//         console.log("start")
//     },[]);
//
//     useEffect(() => {
//         console.log("counter")
//     }, [counter]);
//
//
//     useEffect(() => {
//         if(keyword !==  "" && keyword.length > 5){
//             console.log("for", keyword);
//         }
//
//
//         }
//     ,[keyword])
//     return (
//         <div>
//             <input value={keyword} onChange={onChange} type="text" placeholder="search here..."/>
//             <h1 >{counter}</h1>
//             <button onClick={onClick}>click me</button>
//         </div>
//     )
// }

