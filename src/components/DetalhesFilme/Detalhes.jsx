import React, { useEffect, useState } from 'react'; // import dos hooks
import { buscarFilmesId } from '../../API/dadosAPI' // import de requisição API por ID
import { BsGraphUp, BsHourglassSplit, BsWallet2 } from 'react-icons/bs'; // import de ícones da biblioteca react-icons
import Loading from '../Loading/Loading';
import estilos from './Detalhes.module.css'

const DetalhesFilme = ({ id }) => {
  const [movie, setMovie] = useState(null); // variável de estado 'movie' e função 'setMovie' para atualizá-lo

  useEffect(() => {
    buscarFilmesId(id).then(setMovie); // chama a função e atualiza o estado com o resultado
  }, [id]); // reexecuta o effect caso 'id' mude

  let valorEmDolares = (valor) => {  // função para transformar o valor inteiro em estilo de moeda dólar
    return valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  };

  return (
    <>
      {movie ? ( // if 'movie' não for nulo
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
      ) : ( // if 'movie' for nulo
        <Loading />
      )}
    </>
  );
};

export default DetalhesFilme;