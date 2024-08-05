import {IMovie, IMovieCard} from "../interfaces"
import  "./Moviecard.css"


 export const MovieCard = ({ movie, onClick }: IMovieCard) => {

    return (
        <main className="main">
            <div className="divMovieCard" onClick={() => onClick(movie)}>
                <div className="movieTitle">
                    <p className="pTitle">{movie.title}</p>
                    <p className="pRating">Rating:{movie.rating}/5</p>
                </div>

                <div className="genre">
                    {movie.genre}
                </div>

                <div className="description">
                    {movie.description}
                </div>
            </div>
      </main> 
    )
}