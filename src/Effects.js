import {useState, useEffect, use} from "react";

function Effects() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    useEffect(() => {
        console.log("i run only once");
    }, []);

    useEffect(() => {
        console.log("i run when 'keyword' changes.");
    }, [keyword]);

    useEffect(() => {
        console.log("i run when 'counter' changes.");

    }, [counter]);

    //[]안에는 상태가 변할 때 코드를 실행 할 거라고  react.js에 알려주는 것.
    return (
        <div>

            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default Effects;

