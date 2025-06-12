import {useState, useEffect} from "react";
import MovieInfo from "./MovieInfo";

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);


    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies)


    return(
        <div>
            {loading ? (<h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => <MovieInfo coverImg={movie.medium_cover_image}/>)}
                </div>
            )}

        </div>
        );



}

export default Movie;