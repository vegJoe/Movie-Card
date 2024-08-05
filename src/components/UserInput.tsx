import React, {useState} from "react";
import {IMovie, IUserInput} from "../interfaces"
import "./UserInput.css"

export const InputForm = ({ addMovie }: IUserInput) => {


  const [nextId, setNextId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [genre, setGenre] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMovie: IMovie = {
      id: nextId,
      title,
      rating,
      genre,
      description,
    };

    addMovie(newMovie);

    setNextId(nextId + 1);
    Clear();

  };

  const handleOnClear = () => {

    Clear();

  }

  function Clear() {
    setTitle('');
    setRating(0);
    setGenre('');
    setDescription('')
  }

  return (
    <main className="inputForm">

      <form className="form" onSubmit={handleOnSubmit}>

        
        <div className="titleDiv">
          <label className="title" htmlFor="title">Title:</label>
          <input
              type="text"
              id="title"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />        
        </div>

        <div className="ratingDiv">
          <label htmlFor="rating">Rating:</label>
          <input
            type="range"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </div>

        <div className="genreDiv">
          <label htmlFor="selectGenre">Genre:</label>
          <select
            id="selectGenre"
            className="selectGenre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="" disabled>Select a genre</option>
            <option value="drama">Drama</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>

        <div className="descriptionDiv">
          <label htmlFor="description" className="descriptionLabel">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
        </div>

        <div className="buttons">
          <button type="reset" className="reset" onClick={handleOnClear}>Clear</button>
          <button type="submit" className="submit">Save</button>
        </div>

      </form>

    </main>
  );
};