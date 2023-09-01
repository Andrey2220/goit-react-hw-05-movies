import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Layouts = lazy(() => import('layouts/Layouts'));
const Home = lazy(() => import('pages/home/Home'));
const Movies = lazy(() => import('pages/movies/Movies'));
const MoviesDetails = lazy(() => import('pages/moviesDetails/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
