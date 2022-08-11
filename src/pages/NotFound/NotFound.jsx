import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <h1>
      {' '}
      ERROR 404 Page is not found :(, back to{' '}
      <Link style={{ color: 'green' }} to="/">
        home page
      </Link>
    </h1>
  );
};
