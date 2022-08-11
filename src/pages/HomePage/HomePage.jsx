import { Container, FilmsGallery, Section } from 'components';
import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'service/api-service';

export const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getTrendingMovies();

        setFilms(response);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <Section>
      <Container>
        {error && <h2>{error.message}</h2>}

        <FilmsGallery films={films} />
      </Container>
    </Section>
  );
};
