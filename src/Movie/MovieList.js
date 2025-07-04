import {useState, uesEffect, useEffect} from "react";

function MovieList(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
            .then((response) => response.json())
            .then((json)=> {
                setMovies(json);
                setLoading(false);
            });
    }, [])

    return(
        <div>
            {loading ? <h1>Loading...</h1>:null}

        </div>
    )
}