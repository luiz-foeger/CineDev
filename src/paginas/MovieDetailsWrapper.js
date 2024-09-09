import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/DetalhesFilme/MovieDetails';

const MovieDetailsWrapper = () => {
  const { id } = useParams();
  return <MovieDetails id={id} />;
};

export default MovieDetailsWrapper;
