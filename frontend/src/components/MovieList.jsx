import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index} title={movie} />
      ))}
    </div>
  );
};

export default MovieList;