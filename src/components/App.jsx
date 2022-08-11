import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';
import { Layout } from 'components';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);

const Cast = lazy(() =>
  import('../pages/Cast/Cast').then(module => ({
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('../pages/Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

const NotFound = lazy(() =>
  import('../pages/NotFound/NotFound').then(module => ({
    default: module.NotFound,
  }))
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
