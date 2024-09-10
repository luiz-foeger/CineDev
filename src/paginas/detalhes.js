import React from 'react';
import { useParams } from 'react-router-dom';
import DetalhesFilme from '../components/DetalhesFilme/Detalhes';

const PaginaDetalhes = () => {
  const { id } = useParams();
  return <DetalhesFilme id={id} />;
};

export default PaginaDetalhes;
