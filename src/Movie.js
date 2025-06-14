import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function Movie() {
    return (
        <Router>
            {/*React Router v6에서 Switch 대신 Routes로 변경됨.*/}
            {/*Routes를 쓰는 이유는 한번에 하나의 Route만 렌더링 하기 위함.*/}
            <Routes>
                {/*순서는 더 구체적인 경로(/movie)가 일반적인 경로(/) 앞에 와야 함.*/}
                {/*React Router에 이 url이 변수를 받을 꺼라고 알려주는 표시 /movie/:id*/}
                <Route path="/movie/:id" element={<Detail/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
}

export default Movie;