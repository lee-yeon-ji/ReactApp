import {useEffect, useState} from "react";
import MovieInfo from "../components/MovieInfo";
import styles from "./Home.module.css";

function Home(){
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


    return (
        <div className={styles.container}>
            {loading ? ( <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                            <MovieInfo
                                //key는 React에서만 map 안에서 컨포넌트들을 render할 때 사용
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}/>
                        )
                    )}
                </div>
            )}

        </div>
    );

}
export default Home;


