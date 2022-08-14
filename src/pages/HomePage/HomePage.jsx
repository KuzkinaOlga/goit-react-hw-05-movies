import { Container, FilmsGallery, Section } from 'components';
import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'service/api-service';

export const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getTrendingMovies();

        setFilms(response);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <Section>
      <Container>
        <FilmsGallery films={films} />
      </Container>
    </Section>
  );
};
