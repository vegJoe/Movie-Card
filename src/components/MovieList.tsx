import {IMovie, IMovieList} from "../interfaces"
import { MovieCard } from "./Moviecard"


export const MovieList = ({ movies, onCardClick }: IMovieList) => {


    return (
        <div className="movielist">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={onCardClick}/>
        ))}
        </div>
    )
}