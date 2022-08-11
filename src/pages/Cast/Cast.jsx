import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'Service/api-service';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const cast = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.error(error);
      }
    };
    getCast();
  }, [cast, movieId]);

  return (
    <div>
      <ul>
        {cast.length > 0 ? (
          cast.map(({ id, name, character }) => (
            <li key={id}>
              <span>Actor: {name}</span>
              <span> / Character: {character}</span>
            </li>
          ))
        ) : (
          <h2>Sorry, we dont have this information</h2>
        )}
      </ul>
    </div>
  );
};
