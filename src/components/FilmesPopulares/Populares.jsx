import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; // import de bibliotecas de icones do react-icons
import { Link, useNavigate  } from 'react-router-dom';
import estilos from './Populares.module.css'
import { leituraAPI, URL_API } from '../../API/dadosAPI'

function FilmesPopulares() {
    const [dados, setDados] = useState([]);
    const navigate = useNavigate();
    const consultaAPI = '/movie/top_rated?language=pt-BR&?api_key=f28de8ba0645f2c84397c77d12304763';

    const buscarFilmes = async () => {
        try {
            const response = await fetch(`${URL_API}${consultaAPI}`, leituraAPI);
            const dadosJson = await response.json();
            setDados(dadosJson.results);
        } catch (error) {
            alert('Erro ao buscar Dados da API');
            console.error('Erro ao buscar Dados da API:', error);
        }
    };

    useEffect(() => { buscarFilmes(); }, []);

    return (
        <>
            <h2 className={estilos.titulo}>BEM AVALIADOS:</h2>
            <div className={estilos.containerFilmes}>
                <div className={estilos.filme}>
                    {dados.map((movie) =>
                        <div key={movie.id} className={estilos.cardFilme}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Cartaz do filme ${movie.title}`} />
                            <div>
                                <h3>{movie.title}</h3>
                                <p><FaStar />{movie.vote_average.toFixed(1)}</p>
                                <button  className={estilos.btnDetalhes} onClick={() => navigate(`/detalhes/${movie.id}`)} id='btnDetalhes'>Detalhes</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FilmesPopulares;