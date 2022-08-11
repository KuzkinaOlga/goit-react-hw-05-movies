import { Link, useLocation } from 'react-router-dom';

import { Grid, GridItem } from 'components';
import { imagePath } from 'helpers/imagePath';

export const FilmsGallery = ({ films = [] }) => {
  const location = useLocation();

  return (
    <Grid>
      {films.map(({ id, original_title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <GridItem>
              <img
                src={imagePath(poster_path)}
                alt={original_title}
                width="180"
              />
              <h3>{original_title}</h3>
            </GridItem>
          </Link>
        </li>
      ))}
    </Grid>
  );
};
