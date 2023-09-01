import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesList from 'components/MoviesList/MoviesList';
import useData from 'api/useData';
import { Service } from 'api/API';
import Loader from 'components/Loader/Loader';
import InfoNoMovies from 'components/infoNoMovies/InfoNoMovies';
import { MoviesStyled } from './Movies.styled';

const Movies = () => {
  const { data, error, loader, getData } = useData();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const controller = new AbortController();
    if (search) {
      getData(Service.getSearch, controller.signal, search);
    }

    return () => {
      controller.abort();
    };
  }, [getData, search]);

  const onHandlerSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: e.currentTarget.elements.search.value });
  };

  return (
    <MoviesStyled>
      <form onSubmit={onHandlerSubmit}>
        <input
          type="search"
          placeholder="Search"
          name="search"
          aria-label="Search"
          defaultValue={search ?? ''}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {error && <div>error</div>}
      {loader && <Loader />}
      {data?.length > 0 && <MoviesList movies={data} />}
      {data?.length === 0 && search && <InfoNoMovies />}
    </MoviesStyled>
  );
};

export default Movies;
