import {useState, useEffect, use} from "react";

function Hello() {

    useEffect(() =>{
        console.log("hi :)");
        //cleanup를 사용 시 return을 사용함.
        return () => console.log("bye :(");
    }, []);
    return <h1>Hello</h1>;
}



function Cleanup(){
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
        </div>
    );
}


export default Cleanup;



