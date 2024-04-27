import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";

export function ContextCard(){
    const [movies, SetMovies] = useState([]);
    useEffect(() => {
        get("/discover/movie").then((data) => {
            SetMovies(data.results);
            console.log(data)
        });
    }, []);

    return(
        <ul>
            {movies.map((movie) => (
                <MovieCard/>
            ))}
        </ul>
    );
}