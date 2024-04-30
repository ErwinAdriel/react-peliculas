import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {get} from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
export function MovieDetalles(){
    
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data)
        });
    }, [movieId]);

    const imageUrl = getMovieImg(movie.poster_path, 500);
    return (
        <div>
            <img src={imageUrl} />
        </div>
    );
}