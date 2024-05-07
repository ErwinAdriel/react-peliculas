import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {get} from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetalles.css";

export function MovieDetalles(){
    
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGenero] = useState([]);

    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data);
            setGenero(data.genres[0]);

        });
    }, [movieId]);

    const imageUrl = getMovieImg(movie.poster_path, 500);
    return (
        <div className="detallesContainer">
            <img src={imageUrl} alt={movie.title} className="col movieImage"/> 
            <div className="col movieDetalles">
                <div className="titulo">
                    <h1>{movie.title}</h1>
                </div>
                <div className="item">
                    <h2>Genero</h2>
                    <p>{generos.name}</p>
                </div>
                <hr></hr>
                <div className="item">
                    <h2>Sinopsis</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>

    );
}