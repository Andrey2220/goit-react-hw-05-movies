import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ movies = [] }) => {
  return (
    <>
      <ul>
        {movies?.map(movie => {
          return <MovieItem key={movie.id} data={movie} />;
        })}
      </ul>
    </>
  );
};

export default MoviesList;

MovieItem.propTypes = {
  movies: PropTypes.array.isRequired,
};
