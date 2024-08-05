export interface IMovie {
    id: number;
    title: string;
    rating: number;
    genre: string;
    description: string;
  }

  export interface IMovieList {
    movies: IMovie[];
    onCardClick: (movie: IMovie) => void;
  }

  export interface IMovieCard {
    movie: IMovie;
    onClick: (movie: IMovie) => void;
  }

  export interface IUserInput {
    addMovie: (movie: IMovie) => void;
  }