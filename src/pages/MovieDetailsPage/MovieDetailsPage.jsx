import { useState, useEffect } from 'react';
import {
  useLocation,
  Link,
  useParams,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { Container, Section } from 'components';
import { getMovieDetails } from 'Service/api-service';
import { imagePath } from 'helpers/imagePath';

export const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setFilm(data);
      } catch (error) {
        console.error(error);
        setError(error);
        navigate('/', { replace: true });
      }
    };

    getMovie();
  }, [movieId, navigate]);

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#0052d4',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back</Link>
        </div>

        {error && <h2>{error.message}</h2>}

        <div style={{ display: 'flex', gap: 50 }}>
          <img
            src={imagePath(film.poster_path)}
            alt={film.original_title}
            width="300"
          />

          <div style={{ paddingTop: 30, paddingBottom: 30 }}>
            <h2>{film.original_title}</h2>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              <li>{film.status}</li>
              <li>{film.overview}</li>
              <li>{film.release_date}</li>
            </ul>
          </div>
        </div>

        <ul style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
          <li>
            <Link to={`/movies/${movieId}/cast`} state={{ from: goBackLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={{ from: goBackLink }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </Container>
    </Section>
  );
};
