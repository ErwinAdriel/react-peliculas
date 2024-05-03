import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {get} from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
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
            <img src={imageUrl} alt={movie.title} className="movieImage"/> 
            <div className="movieDetalles">
                <p className="item1">
                    <strong>Titulo: </strong> {movie.title}
                </p>
                <p>
                    <strong>Genero: </strong> {generos.name}
                </p>
                <p>
                    <strong>Descripcion: </strong> {movie.overview}
                </p>
            </div>
        </div>

    );
}