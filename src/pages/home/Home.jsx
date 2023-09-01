import React, { useEffect } from 'react';
import { HomeStyled } from './home.styled';
import { Service } from 'api/API';
import useData from 'api/useData';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  // const [data, setData] = useState(null);
  // const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   setLoader(true);
  //   Service.getTrending(controller.signal)
  //     .then(setData)
  //     .finally(() => setLoader(false));
  // }, []);

  const { data, loader, error, getData } = useData();

  useEffect(() => {
    const controller = new AbortController();
    getData(Service.getTrending, controller.signal);

    return () => {
      controller.abort();
    };
  }, [getData]);

  return (
    <HomeStyled>
      <h1>Trending today</h1>
      {error && <div>{error}</div>}
      {loader && <Loader loader={loader} />}
      {!loader && <MoviesList movies={data} />}
    </HomeStyled>
  );
};

export default Home;
