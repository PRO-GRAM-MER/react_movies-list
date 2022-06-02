import React from 'react';
import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        {...movie}
        title={movie.title}
        description={movie.description}
        imdbUrl={movie.imdbUrl}
        imgUrl={movie.imgUrl}
      />
    ))}
  </div>
);
