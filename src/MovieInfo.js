import {useState, useEffect} from "react";

function MovieInfo({coverImg, title, summary, genres}) {
    return(
        <div>
            <img src={coverImg}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) =>(
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieInfo;