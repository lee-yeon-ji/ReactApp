import {useState, useEffect} from "react";
import MovieList from "./MovieList";

function App(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const onsubmit = () => {}

    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)

        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };


    useEffect(() => {
        getMovies();

    }, []);
    console.log(movies);

    return(
        <div>
            <h1>Movie ranking! :)</h1>

            {loading ? <h1>Loading...</h1>:movies.map((movie) => (
                <MovieList medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>
            ))}

        </div>
    )


}

export default App;
