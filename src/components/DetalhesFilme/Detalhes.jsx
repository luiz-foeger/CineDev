import React, { useEffect, useState } from 'react';
import { BsGraphUp, BsHourglassSplit, BsWallet2, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import estilos from './Detalhes.module.css'
import { buscarFilmesId } from '../../API/dadosAPI'



const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    buscarFilmesId(id).then(setMovie);
  }, [id]);

  return (
    <div>
      {movie ? (
        <>
          <div className={estilos.detalhesFilme}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Cartaz do filme ${movie.title}`} />
            <div>
              <h1>{movie.title} ({movie.release_date.slice(0,4)})</h1>
              <p>Data de Lançamento: {movie.release_date}</p>
              <h3><BsWallet2 />Orçamento:{movie.budget}$</h3>
              <h3><BsGraphUp />Faturamento:{movie.revenue}$</h3>
              <h3><BsHourglassSplit />Duração:{movie.runtime} min</h3>
              <h3><BsFillFileEarmarkTextFill /> Descrição: </h3>
              <p>{movie.overview}</p>
            </div>
          </div>

        </>
      ) : (
        <p>Carregando detalhes do filme...</p>
      )}
    </div>
  );
};

export default MovieDetails;
