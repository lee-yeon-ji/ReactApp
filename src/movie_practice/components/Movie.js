import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

function Movie() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`).then((response) => response.json()).then((json) => console.log(json));
    }, []);
    return (

        <div>{loading ? <h1>Loading...</h1> : null}


        </div>
    )

}


export default Movie;