import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/DetalhesFilme/Detalhes';

const PaginaDetalhes = () => {
  const { id } = useParams();
  return <MovieDetails id={id} />;
};

export default PaginaDetalhes;
