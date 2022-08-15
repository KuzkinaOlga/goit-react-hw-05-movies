import { useEffect, useState } from 'react';
import { Container, Section, SearchForm, FilmsGallery } from 'components';
import { searchMovies } from 'Service/api-service';
import { useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchFilm = searchParams.get('query');

    if (!searchFilm) return;

    const getSearchMovies = async () => {
      try {
        const data = await searchMovies(searchFilm);
        setFilms(data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };

    getSearchMovies();
  }, [searchParams]);

  const onSearchMovies = data => {
    setSearchParams({ query: data });
    searchParams.get('query');
  };

  return (
    <Section>
      <SearchForm onSubmit={onSearchMovies} />
      <Container>
        {error && <h2>{error.message}</h2>}

        <FilmsGallery films={films} />
      </Container>
    </Section>
  );
};
