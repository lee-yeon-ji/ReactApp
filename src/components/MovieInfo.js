import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function MovieInfo({ id, coverImg, title, year, summary, genres }) {
    return (
        <div  className={styles.movie__container}>
            <div className={styles.movie}>
                <div className={styles.movie__info}>
                    <img src={coverImg} alt={title} className={styles.movie__img}/>
                    <div>
                        <h2 className={styles.movie__title}>
                            {/*Link는 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트*/}
                            <Link to={`/movie/${id}`}>{title}</Link>
                        </h2>
                        <h3 className={styles.movie__year}>{year}</h3>
                        <p>{summary.length > 135 ? `${summary.slice(0, 135)}...`:summary}</p>
                        <ul className={styles.movie__genres}>
                            {genres.map((g) => (
                                <li key={g}>{g}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}


MovieInfo.proTotype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default MovieInfo;
