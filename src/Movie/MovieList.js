function MovieList({medium_cover_image, title, summary, genres }) {
    return <div >
        <img src={medium_cover_image}/>
        <h2>{title}</h2>
        <button onSubmit={onsubmit}>{movie.title}</button>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul></div>
}
export default MovieList;
