import React, { useEffect, useState } from 'react';
import { buscarFilmesId } from '../../API/dadosAPI'
import { BsGraphUp, BsHourglassSplit, BsWallet2 } from 'react-icons/bs';
import estilos from './Detalhes.module.css'
import Loading from '../Loading/Loading';
// import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
// import { AiOutlineBarChart } from 'react-icons/ai';


const DetalhesFilme = ({ id }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    buscarFilmesId(id).then(setMovie);
  }, [id]);

  let valorEmDolares = (valor) => {
    return valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  };

  return (
    <>
      {movie ? (
        <div className={estilos.detalhesFilme}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Cartaz do filme ${movie.title}`} />
          <h2 className={estilos.avaliacaoFilme}>{movie.vote_average.toFixed(1)}</h2>
          <img className={estilos.imgFundo} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`Cartaz de fundo do filme ${movie.title}`} />
          <div>
            <h1>{movie.title} ({movie.release_date.slice(0, 4)})</h1>
            <span>"{movie.tagline}"</span>
            <h3>Data de Lançamento:</h3>
            <p> {movie.release_date}</p>

            <h3>Sinopse:</h3>
            <p>{movie.overview}</p>

            <h3><BsWallet2 />Orçamento:</h3>
            <p>{valorEmDolares(movie.budget)}</p>

            <h3><BsGraphUp />Faturamento:</h3>
            <p>{valorEmDolares(movie.revenue)}</p>

            <h3><BsHourglassSplit />Duração:</h3>
            <p>{movie.runtime} minutos</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DetalhesFilme;
