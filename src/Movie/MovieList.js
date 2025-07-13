function Movie() {
    return <div >
        <img src={medium_cover_image} alt={movie.title}/>
        <button onSubmit={onsubmit}>{movie.title}</button>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => <li key={g}>{g}</li>)}
        </ul></div>
}
export default Movie;
