import {useState, useEffect} from "react";

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

            {loading ? <h1>Loading...</h1>:movies.map(movie =>  <img src={medium_cover_image} alt={movie.title}/>
                <button onSubmit={onsubmit}>{movie.title}</button>
    <p>{summary}</p>
    <ul>
        {genres.map((g) => <li key={g}>{g}</li>)}
    </ul>

        </div>
    )


}

export default App;
