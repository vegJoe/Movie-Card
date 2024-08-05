import {useState} from "react";
import { InputForm } from "./components/UserInput";
import { MovieList } from "./components/MovieList";
import { IMovie } from "./interfaces";



export function App() {

  let [movies, setMovies] = useState<IMovie[]>([]);

  const addMovie = (movie: IMovie) => {
    console.log([...movies, movie])
    setMovies([...movies, movie]);
  };

  const removeMovie = (movieToRemove: IMovie): void  => {
    setMovies(movies.filter(movie => movieToRemove !== movie))
  }

  return (
    <>
      <InputForm addMovie={addMovie}/>
      <MovieList movies={movies} onCardClick={removeMovie}/>
    </>
  );
};